import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReservationFormData } from '../types';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: 2,
    specialRequest: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Suggested reservation times
  const timeSlots = [
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Reservation date is required';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Reservation date cannot be in the past';
      }
    }

    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = 'Minimum 1 guest';
    } else if (formData.guests > 20) {
      newErrors.guests = 'For parties larger than 20, please contact us directly';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setBookingId(`US-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '19:30',
      guests: 2,
      specialRequest: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="py-24 bg-[#121214] relative overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=80"
          alt="Dining Table Ambience"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Table Bookings
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Book a Table
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Reserve your table at Urban Spice for an exceptional culinary voyage. We look forward to welcoming you.
          </p>
        </div>

        {/* Card Frame */}
        <div className="rounded-3xl bg-[#18181c] border border-stone-800 shadow-2xl p-6 sm:p-10 md:p-12 relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="reservation-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* 2-Column: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="res-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full bg-[#121214] border ${
                        errors.name ? 'border-rose-500' : 'border-stone-800'
                      } text-sm text-[#fdfbf7] placeholder-stone-600 px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      id="res-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. priya@example.com"
                      className={`w-full bg-[#121214] border ${
                        errors.email ? 'border-rose-500' : 'border-stone-800'
                      } text-sm text-[#fdfbf7] placeholder-stone-600 px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* 3-Column: Phone, Date, Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      id="res-phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-[#121214] border ${
                        errors.phone ? 'border-rose-500' : 'border-stone-800'
                      } text-sm text-[#fdfbf7] placeholder-stone-600 px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Date *</span>
                    </label>
                    <input
                      type="date"
                      id="res-date"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      className={`w-full bg-[#121214] border ${
                        errors.date ? 'border-rose-500' : 'border-stone-800'
                      } text-sm text-[#fdfbf7] px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors [color-scheme:dark]`}
                    />
                    {errors.date && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.date}</p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Time *</span>
                    </label>
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#121214] border border-stone-800 text-sm text-[#fdfbf7] px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#18181c] text-[#fdfbf7]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="res-guests"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                  >
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Number of Guests *</span>
                  </label>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <button
                        type="button"
                        key={num}
                        id={`guest-btn-${num}`}
                        onClick={() => setFormData({ ...formData, guests: num })}
                        className={`w-11 h-11 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                          formData.guests === num
                            ? 'bg-[#d4af37] text-[#121214] font-bold shadow-md shadow-[#d4af37]/20 scale-105'
                            : 'bg-[#121214] text-stone-300 border border-stone-800 hover:border-stone-600'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                    <span className="text-xs text-stone-500 ml-2">
                      ({formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'} selected)
                    </span>
                  </div>
                  {errors.guests && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.guests}</p>
                  )}
                </div>

                {/* Special Request */}
                <div>
                  <label
                    htmlFor="res-special-request"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-300 mb-2 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Special Request (Optional)</span>
                  </label>
                  <textarea
                    id="res-special-request"
                    rows={3}
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    placeholder="Dietary requirements, anniversary celebration, seating preference..."
                    className="w-full bg-[#121214] border border-stone-800 text-sm text-[#fdfbf7] placeholder-stone-600 px-4 py-3 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="reserve-table-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5b842] to-[#c59b27] hover:from-[#e5b842] hover:to-[#b38728] text-[#121214] font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Confirming Table...</span>
                    ) : (
                      <>
                        <span>Reserve My Table</span>
                        <ArrowRight className="w-4 h-4 text-[#121214]" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-stone-500 mt-3">
                    Instant confirmation. No booking fee or upfront deposit required.
                  </p>
                </div>
              </motion.form>
            ) : (
              /* Friendly Confirmation View */
              <motion.div
                key="reservation-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 px-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#d4af37]/15 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Reservation Confirmed
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#fdfbf7] mt-2 mb-4">
                  We look forward to hosting you, {formData.name}!
                </h3>

                <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                  Your table has been reserved. A confirmation summary has also been registered under booking reference <strong className="text-[#e5b842] font-mono">{bookingId}</strong>.
                </p>

                {/* Reservation Summary Card */}
                <div className="max-w-md mx-auto bg-[#121214] p-6 rounded-2xl border border-stone-800 text-left mb-8 space-y-3">
                  <div className="flex justify-between text-xs py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Date & Time</span>
                    <span className="text-[#f7f4ee] font-semibold">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Party Size</span>
                    <span className="text-[#f7f4ee] font-semibold">
                      {formData.guests} Guests
                    </span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-stone-800/80">
                    <span className="text-stone-400">Contact</span>
                    <span className="text-[#f7f4ee] font-semibold">{formData.phone}</span>
                  </div>
                  {formData.specialRequest && (
                    <div className="text-xs pt-1">
                      <span className="text-stone-400 block mb-0.5">Special Notes:</span>
                      <span className="text-stone-300 italic">{formData.specialRequest}</span>
                    </div>
                  )}
                </div>

                <button
                  id="book-another-table-btn"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#121214] font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  Book Another Table
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
