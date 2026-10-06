import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Mail, MapPin, Calendar, Truck, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface QuoteFormProps {
  initialMovingType?: string;
  initialPickup?: string;
  initialDestination?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const MOVING_TYPE_OPTIONS = [
  'Home Shifting',
  'Office Relocation',
  'Packing & Unpacking',
  'Furniture Shifting',
  'Local Moving',
  'Intercity Moving',
  'Other'
];

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialMovingType = 'Home Shifting',
  initialPickup = '',
  initialDestination = '',
  onSuccess,
  compact = false
}) => {
  // Normalize initialMovingType to match options
  const defaultType = MOVING_TYPE_OPTIONS.find(
    opt => initialMovingType.toLowerCase().includes(opt.toLowerCase())
  ) || 'Home Shifting';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: initialPickup,
    destinationLocation: initialDestination,
    movingType: defaultType,
    preferredDate: '',
    roomsOrItems: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastMessageText, setLastMessageText] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile or WhatsApp number.';
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = 'Please enter a valid mobile / WhatsApp number.';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please specify the pickup location.';
    }

    if (!formData.destinationLocation.trim()) {
      newErrors.destinationLocation = 'Please specify the destination location.';
    }

    if (!formData.movingType) {
      newErrors.movingType = 'Please select a moving type.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare WhatsApp Message in exact requested format
    const lines = [
      `Hello Defence Movers & Packers, I would like to request a moving quotation.`,
      ``,
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.email?.trim() ? `Email: ${formData.email.trim()}` : null,
      `Pickup Location: ${formData.pickupLocation.trim()}`,
      `Destination: ${formData.destinationLocation.trim()}`,
      `Moving Type: ${formData.movingType}`,
      formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : null,
      formData.roomsOrItems?.trim() ? `Rooms/Items: ${formData.roomsOrItems.trim()}` : null,
      formData.additionalNotes?.trim() ? `Additional Details: ${formData.additionalNotes.trim()}` : null,
      ``,
      `Please contact me regarding my moving requirements.`
    ].filter((item): item is string => item !== null);

    const fullMessage = lines.join('\n');
    setLastMessageText(fullMessage);
    setSubmitted(true);

    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/923153615444?text=${encoded}`;

    // Open WhatsApp directly to official number
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 4000);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Request Sent via WhatsApp!
        </h4>
        <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
          Your moving details have been prepared and opened in WhatsApp with Defence Movers &amp; Packers. Our coordinator will review your requirements and provide your quotation promptly.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/923153615444?text=${encodeURIComponent(lastMessageText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-lg text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Re-open WhatsApp Chat</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-5 rounded-lg text-sm border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <button
          onClick={handleReset}
          className="mt-6 text-xs text-slate-400 hover:text-slate-200 underline block mx-auto cursor-pointer"
        >
          Submit another request or modify details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Full Name <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Tariq Mehmood"
            className={`w-full bg-slate-900 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
              errors.fullName
                ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                : 'border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Mobile / WhatsApp Number <span className="text-amber-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 0315-3615444"
            className={`w-full bg-slate-900 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
              errors.phone
                ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                : 'border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Email & Moving Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Email Address <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Moving Type <span className="text-amber-400">*</span>
          </label>
          <select
            name="movingType"
            value={formData.movingType}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          >
            {MOVING_TYPE_OPTIONS.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pickup & Destination Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Pickup Location <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. DHA Phase 5, Karachi"
              className={`w-full bg-slate-900 border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.pickupLocation
                  ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
              }`}
            />
          </div>
          {errors.pickupLocation && (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.pickupLocation}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Destination Location <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Truck className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              name="destinationLocation"
              value={formData.destinationLocation}
              onChange={handleChange}
              placeholder="e.g. DHA Phase 8, Clifton, or Lahore"
              className={`w-full bg-slate-900 border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.destinationLocation
                  ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
              }`}
            />
          </div>
          {errors.destinationLocation && (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.destinationLocation}</span>
            </p>
          )}
        </div>
      </div>

      {/* Preferred Moving Date & Approximate Number of Rooms/Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Preferred Moving Date <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Approximate Rooms / Items <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            name="roomsOrItems"
            value={formData.roomsOrItems}
            onChange={handleChange}
            placeholder="e.g. 3 Bed House, or Office with 10 desks"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Additional Details / Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          Additional Details / Message <span className="text-slate-500 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          rows={compact ? 2 : 3}
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Mention any delicate items, floor level, elevator access, or specific requirements..."
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-900/30 group active:scale-98"
        >
          <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="text-sm sm:text-base">Send Request on WhatsApp</span>
        </button>
        <p className="text-center text-[11px] text-slate-400 mt-2">
          Your request will open directly in WhatsApp to Defence Movers &amp; Packers (0315-3615444).
        </p>
      </div>

      {/* Direct Contact Option */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <span>Need urgent shifting?</span>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="text-slate-300 hover:underline flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </form>
  );
};
