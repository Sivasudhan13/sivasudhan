import React, { useState } from 'react';
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
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { contactFormSchema } from '../../lib/validation';
import type { ContactFormData } from '../../lib/validation';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { BorderBeam } from '../reactbits/BorderBeam';

export const Contact: React.FC = () => {
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

      if (response.ok) {
        setSubmissionState('success');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4D8DFF', '#54E7FF', '#F5F7FA'],
        });
        reset();
      } else {
        // Backend returned error or not implemented
        setSubmissionState('fallback');
      }
    } catch {
      // Backend not running (standard frontend preview mode) -> provide honest fallback
      setSubmissionState('fallback');
    }
  };

  const getMailtoUrl = () => {
    if (!submittedData) return `mailto:${profileData.socials.email}`;
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${submittedData.subject}`);
    const body = encodeURIComponent(
      `Hi Sivasudhan,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}\n`
    );
    return `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07090F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Communication"
          title="Resume &amp; Contact Inquiries"
          subtitle="Interested in collaborating on software development, hiring for engineering roles, or exploring tech projects? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels & Resume Download Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Resume Card */}
            <SpotlightCard
              className="p-6 sm:p-7 relative overflow-hidden space-y-4"
              spotlightColor="rgba(84, 231, 255, 0.15)"
              borderColor="rgba(84, 231, 255, 0.5)"
            >
              <BorderBeam size={180} duration={12} colorFrom="#54E7FF" colorTo="#4D8DFF" />
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#54E7FF]/15 border border-[#54E7FF]/30 text-[#54E7FF]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#54E7FF] uppercase tracking-wider">
                    Official Document
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#F5F7FA]">
                    Curriculum Vitae / Resume
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#9AA5B5] leading-relaxed">
                Contains verified details of education at RVS CET, MERN developer internship at ITBoomi, hackathon awards, and full-stack technical competencies.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#4D8DFF] to-[#3B6ECC] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#4D8DFF]/20 hover:scale-[1.02] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Resume PDF</span>
                </a>

                <a
                  href={profileData.resumeUrl}
                  download="Sivasudhan_E_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101522] hover:bg-[#171E31] text-[#F5F7FA] border border-white/10 hover:border-[#54E7FF]/40 text-xs sm:text-sm font-medium transition-all"
                >
                  <Download className="w-4 h-4 text-[#54E7FF]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </SpotlightCard>

            {/* Direct Contact Channels */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-mono text-[#54E7FF] uppercase tracking-wider font-semibold">
                Direct Contact Channels
              </h4>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#101522] border border-white/5 hover:border-[#4D8DFF]/40 text-[#9AA5B5] hover:text-[#F5F7FA] transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#4D8DFF] group-hover:scale-110 transition-transform" />
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-[#9AA5B5]">Email</div>
                    <span className="font-mono text-xs text-[#F5F7FA]">{profileData.socials.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.socials.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#101522] border border-white/5 hover:border-[#4D8DFF]/40 text-[#9AA5B5] hover:text-[#F5F7FA] transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#4D8DFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-[#9AA5B5]">Phone / WhatsApp</div>
                    <span className="font-mono text-xs text-[#F5F7FA]">{profileData.socials.phone}</span>
                  </div>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#101522] border border-white/5 hover:border-[#4D8DFF]/40 text-[#9AA5B5] hover:text-[#F5F7FA] transition-colors group"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#4D8DFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-[#9AA5B5]">LinkedIn Profile</div>
                    <span className="font-mono text-xs text-[#F5F7FA]">linkedin.com/in/sivasudhan-e-4470862a5</span>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#101522] border border-white/5 hover:border-[#4D8DFF]/40 text-[#9AA5B5] hover:text-[#F5F7FA] transition-colors group"
                >
                  <GithubIcon className="w-5 h-5 text-[#4D8DFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-[#9AA5B5]">GitHub Profile</div>
                    <span className="font-mono text-xs text-[#F5F7FA]">github.com/Sivasudhan13</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 space-y-6" spotlightColor="rgba(77, 141, 255, 0.1)" borderColor="rgba(77, 141, 255, 0.4)">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#54E7FF]" />
                <h3 className="text-xl font-display font-bold text-[#F5F7FA]">
                  Send a Direct Message
                </h3>
              </div>

              {/* Success Notification */}
              {submissionState === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Message Dispatched Successfully!</p>
                    <p className="text-xs text-emerald-300 mt-0.5">
                      Thank you for reaching out. Sivasudhan will review your inquiry and respond shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Honest Fallback Notification */}
              {submissionState === 'fallback' && (
                <div className="p-5 rounded-xl bg-[#171E31] border border-[#54E7FF]/40 space-y-3">
                  <div className="flex items-start gap-2.5 text-[#54E7FF]">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F5F7FA]">
                        Direct Mail Delivery Ready
                      </h4>
                      <p className="text-xs text-[#9AA5B5] mt-1">
                        The live backend email server is currently awaiting SMTP configuration. To guarantee your message reaches Sivasudhan instantly, click below to open your preferred email client pre-filled with your message.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4D8DFF] to-[#3B6ECC] text-white text-xs font-semibold shadow-md hover:scale-[1.02] transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Default Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmissionState('idle')}
                      className="text-xs font-mono text-[#9AA5B5] hover:text-white"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submissionState === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-[#FF454F] flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage || 'Failed to submit form. Please try direct email.'}</span>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot hidden input for spam bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none' }}
                  {...register('hp_field')}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-[#9AA5B5]">
                      Your Name <span className="text-[#FF454F]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#101522] border text-sm text-[#F5F7FA] placeholder-[#637083] focus:outline-none focus:ring-2 focus:ring-[#54E7FF] transition-all ${
                        errors.name ? 'border-[#FF454F]' : 'border-white/10 hover:border-white/20'
                      }`}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#FF454F]">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-[#9AA5B5]">
                      Email Address <span className="text-[#FF454F]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#101522] border text-sm text-[#F5F7FA] placeholder-[#637083] focus:outline-none focus:ring-2 focus:ring-[#54E7FF] transition-all ${
                        errors.email ? 'border-[#FF454F]' : 'border-white/10 hover:border-white/20'
                      }`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#FF454F]">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-[#9AA5B5]">
                    Subject <span className="text-[#FF454F]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Technical Discussion"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#101522] border text-sm text-[#F5F7FA] placeholder-[#637083] focus:outline-none focus:ring-2 focus:ring-[#54E7FF] transition-all ${
                      errors.subject ? 'border-[#FF454F]' : 'border-white/10 hover:border-white/20'
                    }`}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-xs text-[#FF454F]">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-[#9AA5B5]">
                    Message <span className="text-[#FF454F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#101522] border text-sm text-[#F5F7FA] placeholder-[#637083] focus:outline-none focus:ring-2 focus:ring-[#54E7FF] transition-all resize-y ${
                      errors.message ? 'border-[#FF454F]' : 'border-white/10 hover:border-white/20'
                    }`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#FF454F]">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    isLoading={submissionState === 'loading'}
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Direct Message
                  </Button>
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
