import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Send, 
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function AboutAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visiting card wala official WhatsApp number
    const phoneNumber = "918355892625"; 
    const text = `*New Inquiry From Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Requirement:* ${formData.requirement}\n*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted Plywood Supplier in Thane (W) & Maharashtra
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We deliver uncompromised wood quality and reliable service to contractors, interior designers, and homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-500 transition-colors group">
              <div className="bg-amber-100 text-amber-900 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-900 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">100% Genuine Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Certified IS:710 Marine and BWR plywood tested for heavy waterproofing and termite resistance.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-500 transition-colors group">
              <div className="bg-amber-100 text-amber-900 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-900 group-hover:text-white transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Wholesale & Retail Prices</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get direct distributor rates without any hidden margins, perfect for bulk constructions.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-500 transition-colors group">
              <div className="bg-amber-100 text-amber-900 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-900 group-hover:text-white transition-colors">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Transport Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prompt loading and local transport arrangement directly to your building site or workshop.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-500 transition-colors group">
              <div className="bg-amber-100 text-amber-900 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-900 group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Confused about thickness or grade? Our experts help you choose the right material for your budget.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section id="about" className="py-20 bg-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="bg-amber-800 text-amber-200 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              About Our Business
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Building Trust in Wood & Hardware Since Years
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Managed by <strong className="text-amber-300">Sunil R. Vishwakarma</strong>[cite: 2], we are a trusted wholesale and retail destination for Plywood, Laminates, Fancy Hardware, Modular Kitchens, and All Kinds of Interior and Furniture materials[cite: 2].
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <span className="block text-3xl font-bold text-amber-400">1000+</span>
                <span className="text-xs text-slate-300">Happy Clients & Builders</span>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <span className="block text-3xl font-bold text-amber-400">100%</span>
                <span className="text-xs text-slate-300">Waterproof Guarantee</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/40 p-8 rounded-3xl border border-amber-800/60 backdrop-blur-md space-y-6">
            <h3 className="text-xl font-bold text-amber-300 flex items-center">
              <Building2 className="w-6 h-6 mr-2" /> Visit Our Shop / Office
            </h3>
            <p className="text-slate-300 text-sm">
              Come explore our wide range of physical sample sheets, thickness options, and laminate shades directly at our outlet.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Shop no. 02, Nr. Piramal Vaikunth, Balkum Naka, Behind BMC Office, Thane (W) 400608[cite: 2]</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+91 8355892625, 9004488775[cite: 2]</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT & INQUIRY SECTION ================= */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Info */}
            <div className="space-y-6">
              <span className="bg-amber-200 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Need Bulk Plywood Quotation? Send Us Your Requirement.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need materials for a single home interior or a commercial building project, fill out the form or drop a direct message on WhatsApp for instant pricing.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <div className="bg-amber-100 text-amber-900 p-3 rounded-lg">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Call Us Anytime</span>
                    <a href="tel:+918355892625" className="text-base font-bold text-slate-900 hover:text-amber-800">+91 8355892625, 9004488775[cite: 2]</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <div className="bg-amber-100 text-amber-900 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Proprietor Name</span>
                    <span className="text-base font-bold text-slate-900">Sunil R. Vishwakarma[cite: 2]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Price Inquiry</h3>
              
              {submitted && (
                <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-sm font-medium flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" /> Redirecting to WhatsApp with your details!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar" 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210" 
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Select Requirement</label>
                  <select 
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-800"
                  >
                    <option value="">-- Select Requirement --</option>
                    <option value="Marine Plywood & Laminates">Marine Plywood & Laminates[cite: 2]</option>
                    <option value="Fancy Hardware">Fancy Hardware[cite: 2]</option>
                    <option value="Modular Kitchen">Modular Kitchen[cite: 2]</option>
                    <option value="Interior And Furniture">Interior And Furniture[cite: 2]</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Additional Message / Sheets Needed</label>
                  <textarea 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Need 19mm sheets for kitchen cabinets..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-800"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
          <div>
            <span className="text-white font-bold text-lg block">Vishwakarma Plywood And Furniture</span>
            <span className="text-xs text-slate-500">Proprietor: Sunil R. Vishwakarma | Thane (W)[cite: 2]</span>
          </div>
          <div className="text-xs text-slate-400">
            <span>📞 8355892625, 9004488775[cite: 2]</span>
          </div>
        </div>
      </footer>
    </div>
  );
}