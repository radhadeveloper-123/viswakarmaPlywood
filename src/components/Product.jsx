import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');

  // Product Data
  const products = [
    {
      id: 1,
      name: "Marine Plywood (IS:710)",
      category: "waterproof",
      thickness: "6mm, 12mm, 16mm, 19mm",
      description: "Best quality boiling water proof plywood specially designed for heavy moisture areas, modular kitchens, and boat building.",
      features: ["100% Boiling Water Proof", "Borer & Termite Proof", "Lifetime Warranty"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "BWR Grade Plywood",
      category: "waterproof",
      thickness: "8mm, 12mm, 19mm",
      description: "Boiling Water Resistant plywood ideal for home furniture, kitchen cabinets, and bathroom cupboards.",
      features: ["High Durability", "Strong Screw Holding", "Weather Resistant"],
      badge: "Popular"
    },
    {
      id: 3,
      name: "MR Grade Plywood (Interior)",
      category: "interior",
      thickness: "6mm, 12mm, 18mm",
      description: "Moisture Resistant interior plywood perfect for wardrobes, beds, TV units, and indoor paneling.",
      features: ["Smooth Finish", "Cost Effective", "Eco-Friendly Glue"],
      badge: "Value"
    },
    {
      id: 4,
      name: "Blockboards (Hollow/Solid)",
      category: "boards",
      thickness: "19mm, 25mm",
      description: "Sturdy blockboards designed for long shelves, large doors, and heavy wardrobe shutters without bending.",
      features: ["Zero Bending", "Pine Wood Core", "High Load Capacity"],
      badge: "Strong"
    },
    {
      id: 5,
      name: "Designer Laminates & Veneers",
      category: "laminates",
      thickness: "1mm - 1.2mm",
      description: "Give your furniture a luxurious finish with our exclusive collection of high-gloss, matt, and textured laminates.",
      features: ["Scratch Resistant", "Anti-Fading", "500+ Designs"],
      badge: "New"
    },
    {
      id: 6,
      name: "Flush Doors",
      category: "boards",
      thickness: "30mm, 32mm, 35mm",
      description: "Strong and durable commercial and waterproof flush doors designed for main entrances and bedroom doors.",
      features: ["Impact Resistant", "Dimensionally Stable", "Termite Treated"],
      badge: "Essential"
    }
  ];

  // Filter logic
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(item => item.category === activeTab);

  const handleInquire = (productName) => {
    const phoneNumber = "919876543210"; // Apna WhatsApp number yahan bhi daal sakte hain
    const message = `Hello, I want to inquire about ${productName}. Please share the wholesale/retail pricing and availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="bg-amber-200 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Explore Our Premium Plywood Range
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From heavy waterproof marine sheets to fine interior laminates, we supply the best materials for your homes and offices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTab === 'all' ? 'bg-amber-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            All Products
          </button>
          <button 
            onClick={() => setActiveTab('waterproof')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTab === 'waterproof' ? 'bg-amber-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Waterproof / Marine
          </button>
          <button 
            onClick={() => setActiveTab('interior')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTab === 'interior' ? 'bg-amber-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Interior / MR Grade
          </button>
          <button 
            onClick={() => setActiveTab('boards')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTab === 'boards' ? 'bg-amber-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Blockboards & Doors
          </button>
          <button 
            onClick={() => setActiveTab('laminates')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTab === 'laminates' ? 'bg-amber-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Laminates
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Card Top Banner / Icon Area */}
                <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-6 text-white relative">
                  <span className="absolute top-4 right-4 bg-amber-500 text-amber-950 text-xs font-bold px-2.5 py-1 rounded-md">
                    {product.badge}
                  </span>
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                    <Layers className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-xs text-amber-200 mt-1">Thickness: {product.thickness}</p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => handleInquire(product.name)}
                  className="w-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 border border-amber-200 transition"
                >
                  <span>Enquire Price / Stock</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}