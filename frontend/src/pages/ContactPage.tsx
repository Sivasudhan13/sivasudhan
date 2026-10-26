import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  FileText,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { contactFormSchema } from '../lib/validation';
import type { ContactFormData } from '../lib/validation';
import { profileData } from '../data/profile';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { BorderBeam } from '../components/reactbits/BorderBeam';
import { SITE_URL } from '../lib/seo';

export const ContactPage: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'loading' | 'success' | 'fallback' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot spam check
    if (data.hp_field && data.hp_field.length > 0) {
      console.warn('Spam submission detected by honeypot.');
      return;
    }

    setSubmissionState('loading');
    setErrorMessage('');
    setSubmittedData(data);

    try {
      // Attempt backend API dispatch
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error('API dispatch failed');
      }

      setSubmissionState('success');
      reset();

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5A36', '#7C3AED', '#10B981', '#DDD6FE'],
        });
      } catch {
        // Confetti fallback
      }
    } catch {
      // Graceful fallback to client-side mailto option
      setSubmissionState('fallback');
    }
  };

  const getMailtoHref = () => {
    if (!submittedData) return `mailto:${profileData.socials.email}`;
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${submittedData.subject}`);
    const body = encodeURIComponent(
      `Hello Sivasudhan,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\n${submittedData.message}`
    );
    return `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-24 bg-[#FBFBFE] min-h-screen text-apple-dark">
      <Helmet>
        <title>{`Contact & Connect — Sivasudhan E`}</title>
        <meta
          name="description"
          content="Initiate contact with Sivasudhan E for full-stack engineering roles, systems prototyping collaborations, or technical consultations. Direct email, phone, and validated message form."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      {/* Ambient glows */}
      <div className="absolute top-24 right-10 w-96 h-96 bg-brand-tomato/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-brand-lavender/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-tomato/30 text-xs font-semibold text-brand-tomato shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-brand-tomato" />
            <span>Direct Transmission Channel</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-apple-dark tracking-tight">
            Connect &amp; Collaborate.
          </h1>
          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            Interested in discussing full-time software engineering roles, hackathon project collaborations, or drone telemetry systems? Send a direct message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <SpotlightCard className="p-8 relative">
              <BorderBeam size={220} duration={12} colorFrom="#FF5A36" colorTo="#7C3AED" />
              <h2 className="font-display font-bold text-2xl text-apple-dark mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-brand-lavender" />
                <span>Direct Channels</span>
              </h2>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#F5F3FF] border border-brand-lavender/20 hover:border-brand-lavender/50 hover:bg-[#EDE9FE] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-brand-tomato/15 text-brand-tomato">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-semibold text-apple-secondary block">
                      Email Address
                    </span>
                    <span className="text-sm font-sans font-medium text-apple-dark group-hover:text-brand-lavender transition-colors">
                      {profileData.socials.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profileData.socials.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#F5F3FF] border border-brand-lavender/20 hover:border-brand-lavender/50 hover:bg-[#EDE9FE] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-brand-green/15 text-brand-green">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-semibold text-apple-secondary block">
                      Direct Mobile
                    </span>
                    <span className="text-sm font-sans font-medium text-apple-dark group-hover:text-brand-green transition-colors">
                      {profileData.socials.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-brand-lavender/15 text-brand-lavender">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-semibold text-apple-secondary block">
                      Current Base
                    </span>
                    <span className="text-sm font-sans font-medium text-apple-dark">
                      {profileData.location}
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-brand-green/10 text-brand-green">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-semibold text-apple-secondary block">
                      Response SLA
                    </span>
                    <span className="text-sm font-sans font-medium text-apple-dark">
                      Replies within 24 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-black/5">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-apple-secondary block mb-3">
                  Verified Social Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-black/10 hover:border-brand-lavender text-apple-dark text-xs font-sans font-semibold shadow-xs hover:shadow transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-black/10 hover:border-brand-lavender text-apple-dark text-xs font-sans font-semibold shadow-xs hover:shadow transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Resume Card - Apple Style */}
            <div className="p-7 rounded-[32px] bg-gradient-to-r from-brand-lavender/10 via-white to-brand-tomato/10 border border-brand-lavender/25 flex flex-col justify-between gap-5 shadow-[0_10px_35px_-8px_rgba(124,58,237,0.08)]">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-brand-tomato/15 text-brand-tomato">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-apple-dark text-lg">
                    Official Resume (PDF)
                  </h3>
                  <span className="text-xs text-apple-secondary">
                    Updated 2026 • Verified Records
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-black/10 text-apple-dark text-xs font-sans font-semibold hover:border-brand-lavender shadow-xs transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-lavender" />
                  <span>Preview</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  download="Sivasudhan_E_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-apple-dark text-white text-xs font-sans font-semibold hover:bg-brand-lavender shadow-md active:scale-95 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 relative">
              <BorderBeam size={240} duration={14} colorFrom="#7C3AED" colorTo="#FF5A36" />

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-apple-dark mb-2">
                Send a Message.
              </h2>
              <p className="text-sm text-apple-secondary mb-8 font-normal">
                Fill out the transmission form. We will coordinate via email promptly.
              </p>

              {/* Status Banner */}
              {submissionState === 'success' && (
                <div className="mb-6 p-5 rounded-2xl bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-apple-dark">Transmission Delivered!</h4>
                    <p className="text-apple-secondary mt-0.5">
                      Thank you for reaching out. Your message has been routed to Sivasudhan E.
                    </p>
                  </div>
                </div>
              )}

              {submissionState === 'fallback' && (
                <div className="mb-6 p-5 rounded-2xl bg-brand-tomato/10 border border-brand-tomato/30 text-brand-tomato text-xs sm:text-sm flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-apple-dark">API Relay Unreachable</h4>
                      <p className="text-apple-secondary mt-0.5">
                        The backend notification server is currently unreachable. You can transmit your drafted message directly through your email client:
                      </p>
                      {errorMessage && (
                        <p className="text-xs text-brand-tomato/90 mt-1 font-mono">
                          Detail: {errorMessage}
                        </p>
                      )}
                    </div>
                  </div>
                  <a
                    href={getMailtoHref()}
                    className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-tomato text-white font-sans text-xs font-semibold hover:bg-brand-tomatoDark shadow-md transition-all"
                  >
                    <span>Open in Email App with Draft</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot hidden input */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('hp_field')}
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-sans font-semibold text-apple-dark uppercase tracking-wider mb-2"
                  >
                    Full Name <span className="text-brand-tomato">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Maya Lin"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-apple-dark placeholder-apple-muted text-sm shadow-2xs focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-brand-tomato focus:ring-brand-tomato/20'
                        : 'border-black/10 focus:border-brand-lavender focus:ring-brand-lavender/20'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-brand-tomato mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-sans font-semibold text-apple-dark uppercase tracking-wider mb-2"
                  >
                    Email Address <span className="text-brand-tomato">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. maya@company.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-apple-dark placeholder-apple-muted text-sm shadow-2xs focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-brand-tomato focus:ring-brand-tomato/20'
                        : 'border-black/10 focus:border-brand-lavender focus:ring-brand-lavender/20'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-brand-tomato mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-sans font-semibold text-apple-dark uppercase tracking-wider mb-2"
                  >
                    Subject <span className="text-brand-tomato">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Full-Stack Engineering Role Inquiry"
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-apple-dark placeholder-apple-muted text-sm shadow-2xs focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-brand-tomato focus:ring-brand-tomato/20'
                        : 'border-black/10 focus:border-brand-lavender focus:ring-brand-lavender/20'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-brand-tomato mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-sans font-semibold text-apple-dark uppercase tracking-wider mb-2"
                  >
                    Message <span className="text-brand-tomato">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide details about your project, team, or opportunity..."
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border text-apple-dark placeholder-apple-muted text-sm shadow-2xs focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-brand-tomato focus:ring-brand-tomato/20'
                        : 'border-black/10 focus:border-brand-lavender focus:ring-brand-lavender/20'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-brand-tomato mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Apple Pill Submit Button */}
                <button
                  type="submit"
                  disabled={submissionState === 'loading'}
                  className="w-full py-4 px-8 rounded-full font-sans font-semibold text-sm text-white bg-apple-dark hover:bg-brand-lavender disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-black/10 active:scale-98 transition-all"
                >
                  {submissionState === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </div>
        </div>

        {/* Bottom Page Navigation Links */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-apple-dark hover:text-brand-lavender transition-colors"
          >
            <span>Return to Portfolio Home</span>
            <ArrowRight className="w-4 h-4 text-brand-tomato" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans text-brand-lavender hover:underline font-medium"
          >
            <span>Review Projects Portfolio &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
