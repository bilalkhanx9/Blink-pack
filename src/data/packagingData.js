export const packagingTypes = [
  {
    id: 'corrugated',
    slug: 'corrugate-mailer',
    title: 'Corrugate / Mailer',
    eyebrow: 'PACKAGING TYPE',
    description: 'A sturdy box made from corrugated (layered/fluted) cardboard, ideal for shipping, subscription boxes, and premium unboxing.',
    cardDescription: 'Shipping & subscription boxes',
    image: '/main_page_boxes/mailerbox-1.webp',
    cardImage: '/main_page_boxes/mailerbox-1.webp',
    cardHoverImage: '/main_page_boxes/mailerbox-2.webp',
    features: [
      { id: 'durable', label: 'High Durability', icon: 'shield' },
      { id: 'eco', label: '100% Recyclable', icon: 'leaf' },
      { id: 'custom', label: 'Custom Inserts', icon: 'custom' }
    ],
    bestForSummary: 'E-commerce shipping, subscription boxes, cosmetics/skincare brands wanting a premium unboxing experience.',
    subTypes: [
      {
        id: 'mailer-selflock',
        number: 1,
        title: 'Mailer Box (Self-Locking)',
        shortTitle: '1. Mailer Box (Self-Locking)',
        description: 'Folds and locks securely without requiring packing tape. Features double-wall sides and front dust flaps for a pristine, clean e-commerce presentation.',
        thumb: '/MailerBox/main.webp',
        mainImage: '/MailerBox/main.webp',
        gallery: [
          { image: '/MailerBox/main.webp', name: 'Standard Kraft' },
          { image: '/MailerBox/1.webp', name: 'Open Front' },
          { image: '/MailerBox/2.webp', name: 'Closed Box' },
          { image: '/MailerBox/3.webp', name: 'Open Box' }
        ],
        bestFor: [
          { icon: '🎁', label: 'Subscription Box Deliveries' },
          { icon: '💄', label: 'Cosmetics & Skincare Kits' },
          { icon: '👕', label: 'Apparel & Brand Merch' },
          { icon: '☕', label: 'Artisanal Coffee & Tea' }
        ],
        keyFeatures: [
          'Tape-free self-locking mechanism',
          'Full inside & outside high-definition printing',
          'Protective dust flaps prevent debris entry',
          'Delivers an unforgettable customer unboxing moment'
        ],
        material: 'Premium E-Flute Corrugated Board (White or Natural Kraft)',
        lamination: 'Matte or glossy',
        addOns: 'Gold foil, spot UV, metallic print',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'rsc',
        number: 2,
        title: 'RSC (Regular Slotted Container)',
        shortTitle: '2. RSC (Regular Slotted)',
        description: 'Standard shipping box with all flaps having the same length, meeting at the center. The most widely used and cost-effective shipping carton in the world.',
        thumb: '/Corrugate/Corrugate-Main-1.webp',
        mainImage: '/Corrugate/Corrugate-Main-1.webp',
        gallery: [
          { image: '/Corrugate/Corrugate-Main-1.webp', name: 'Standard RSC' },
          { image: '/MailerBox/main.webp', name: 'Standard Kraft' },
          { image: '/MailerBox/1.webp', name: 'Open Front' },
          { image: '/MailerBox/2.webp', name: 'Closed Box' }
        ],
        bestFor: [
          { icon: '📦', label: 'Bulk E-commerce Shipping' },
          { icon: '🏭', label: 'Warehousing & Freight' },
          { icon: '🚚', label: 'Standard Parcel Delivery' },
          { icon: '🧴', label: 'Multi-Product Shipments' }
        ],
        keyFeatures: [
          'Most economical shipping box design',
          'High stacking strength with fluted corrugated walls',
          'Shipped completely flat for minimal storage footprint',
          '100% recyclable, biodegradable material'
        ],
        material: 'Single-wall (E/B/C-Flute) or Double-wall Heavy Corrugated',
        lamination: 'Matte or glossy',
        addOns: 'Gold foil, spot UV, metallic print',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'diecut-mailer',
        number: 3,
        title: 'Die-cut Mailer',
        shortTitle: '3. Die-cut Mailer',
        description: 'A custom packaging solution engineered with precision-cut folds and a self-locking tuck mechanism — no tape or adhesive required.',
        detailedDescription: [
          "A die-cut mailer box is a custom packaging solution engineered with precision-cut folds and a self-locking tuck mechanism — no tape or adhesive required. The entire structure is cut from a single sheet, with interlocking flaps that fold together to create a sturdy, secure box in seconds. This makes it not only quick to assemble but also more sustainable, since there's less reliance on extra materials like glue or tape.",
          "Beyond function, die-cut mailer boxes are widely used because they double as a branding opportunity — the flat lid, clean panels, and open-box reveal give brands a perfect canvas for logos, patterns, and premium finishes. They're a favorite for e-commerce and subscription brands because they protect the product during shipping while also creating a memorable unboxing experience for the customer."
        ],
        thumb: '/Die-Cut/Corrugated.webp',
        mainImage: '/Die-Cut/Corrugated.webp',
        gallery: [
          { image: '/Die-Cut/Corrugated.webp', name: 'Corrugated' },
          { image: '/Die-Cut/Hydrophobic.webp', name: 'Hydrophobic' },
          { image: '/Die-Cut/Rigid.webp', name: 'Rigid' }
        ],
        bestFor: [
          { icon: '✨', label: 'Influencer & PR Gift Kits' },
          { icon: '📱', label: 'Tech Accessories' },
          { icon: '🧴', label: 'Bespoke Skincare Sets' },
          { icon: '🍫', label: 'Luxury Confectionery' }
        ],
        keyFeatures: [
          'No tape needed — self-locking tuck design holds securely on its own',
          'Quick assembly — folds together in seconds, saving time on packing',
          'Custom branding space — flat panels ideal for logos, patterns, and foil printing',
          'Material flexibility — available in kraft, corrugated, rigid, and hydrophobic (water-resistant) options',
          'Sturdy protection — keeps products safe during shipping and handling',
          'Premium unboxing feel — clean, structured design elevates the customer experience',
          'Eco-friendly option — reduced need for extra tape or adhesive materials'
        ],
        material: 'Clay-Coated Heavy E-Flute / Kraftboard',
        lamination: 'Matte or glossy',
        addOns: 'Gold foil, spot UV, metallic print',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  },
  {
    id: 'tuck',
    slug: 'tuck-boxes',
    title: 'Tuck Box',
    eyebrow: 'PACKAGING TYPE',
    description: 'Flaps tuck inward to close, requiring little to no glue. Versatile folding cartons that are lightweight and easy to assemble.',
    cardDescription: '3 folding styles',
    image: '/main_page_boxes/tuckbox-1.webp',
    cardImage: '/main_page_boxes/tuckbox-1.webp',
    cardHoverImage: '/main_page_boxes/tuckbox-2.webp',
    features: [
      { id: 'durable', label: 'Durable', icon: 'shield' },
      { id: 'eco', label: 'Eco Friendly', icon: 'leaf' },
      { id: 'custom', label: 'Fully Customizable', icon: 'custom' }
    ],
    bestForSummary: 'Small retail products – medicine boxes, cosmetics, soap, small electronics.',
    subTypes: [
      {
        id: 'ste',
        number: 1,
        title: 'Straight Tuck End (STE)',
        shortTitle: '1. Straight Tuck End (STE)',
        description: 'Both top and bottom flaps tuck in the same direction from front to back, leaving a completely seamless, smooth front display face.',
        thumb: '/subtype-ste-thumb.png',
        mainImage: '/subtype-ste-main.png',
        gallery: [
          '/subtype-ste-main.png',
          '/subtype-rte-thumb.png',
          '/subtype-autolock-thumb.png'
        ],
        bestFor: [
          { icon: '🧴', label: 'Cosmetics & Skincare' },
          { icon: '💊', label: 'Medicine & Health' },
          { icon: '🧼', label: 'Soap & Body Bars' },
          { icon: '🔌', label: 'Small Electronics' }
        ],
        keyFeatures: [
          'Seamless front display face with flaps closing to rear',
          'Quick manual or high-speed automated assembly',
          'Lightweight & compact for space-saving shipping',
          '100% recyclable, sustainably sourced paperboard'
        ],
        material: '16pt – 24pt Premium SBS Paperboard / Recycled Kraft',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'rte',
        number: 2,
        title: 'Reverse Tuck End (RTE)',
        shortTitle: '2. Reverse Tuck End (RTE)',
        description: 'Top and bottom flaps tuck in opposite directions. The interlocking sheet layout makes RTE our most cost-effective and economical folding carton style.',
        thumb: '/subtype-rte-thumb.png',
        mainImage: '/subtype-rte-thumb.png',
        gallery: [
          '/subtype-rte-thumb.png',
          '/subtype-ste-main.png',
          '/subtype-autolock-thumb.png'
        ],
        bestFor: [
          { icon: '💊', label: 'Pharma & Vitamin Cartons' },
          { icon: '💄', label: 'Lipsticks & Perfume Bottles' },
          { icon: '🌿', label: 'Essential Oils & Serums' },
          { icon: '📦', label: 'Everyday Consumer Goods' }
        ],
        keyFeatures: [
          'Most economical nesting during die-cutting',
          'Easy push-and-tuck closure with friction locks',
          'Crisp edge folding for retail shelves',
          'FSC-certified eco-friendly paper'
        ],
        material: '16pt – 24pt Bleached Sulfate (SBS) / Kraft Paperboard',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'autolock',
        number: 3,
        title: 'Auto-Lock Bottom Tuck',
        shortTitle: '3. Auto-Lock Bottom Tuck',
        description: 'Features a pre-glued bottom that pops open and locks into place automatically upon unfolding, providing superior strength for heavier retail items.',
        thumb: '/subtype-autolock-thumb.png',
        mainImage: '/subtype-autolock-thumb.png',
        gallery: [
          '/subtype-autolock-thumb.png',
          '/subtype-ste-main.png',
          '/subtype-rte-thumb.png'
        ],
        bestFor: [
          { icon: '🍷', label: 'Heavy Glass Bottles & Jars' },
          { icon: '🕯️', label: 'Candles & Diffusers' },
          { icon: '🧴', label: 'Luxury Creams & Tinctures' },
          { icon: '📦', label: 'High-Speed Assembly Lines' }
        ],
        keyFeatures: [
          'Pre-glued base locks instantly in seconds',
          'Heavy bottom load capacity prevents product fall-through',
          'Cuts packaging assembly time by up to 60%',
          'Reinforced bottom fold structure'
        ],
        material: '18pt – 28pt Heavyweight SBS / Clay Coated Board',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  },
  {
    id: 'fliptop',
    slug: 'flip-top-boxes',
    title: 'Flip Top Box',
    eyebrow: 'PACKAGING TYPE',
    description: 'A rigid, two-piece box with a hinged opening lid that provides an ultra-premium, luxury unboxing prestige.',
    cardDescription: 'Rigid, two-piece',
    image: '/main_page_boxes/fliptop-1.webp',
    cardImage: '/main_page_boxes/fliptop-1.webp',
    cardHoverImage: '/main_page_boxes/fliptop-2.webp',
    features: [
      { id: 'durable', label: 'Ultra Rigid', icon: 'shield' },
      { id: 'eco', label: 'Sustainable Greyboard', icon: 'leaf' },
      { id: 'custom', label: 'Magnetic Closure', icon: 'custom' }
    ],
    bestForSummary: 'Premium/luxury products – perfumes, jewelry, high-end gifts.',
    subTypes: [
      {
        id: 'magnetic-fliptop',
        number: 1,
        title: 'Magnetic Flip Top',
        shortTitle: '1. Magnetic Flip Top',
        description: 'Lid snaps closed securely with concealed magnets, creating a luxurious magnetic snap that elevates premium product unboxing.',
        thumb: '/grid-fliptop.png',
        mainImage: '/grid-fliptop.png',
        gallery: ['/grid-fliptop.png', '/grid-corrugate.png'],
        bestFor: [
          { icon: '💎', label: 'Jewelry & Watches' },
          { icon: '🍷', label: 'Perfumes & Fragrances' },
          { icon: '📱', label: 'Luxury Electronics' },
          { icon: '🎁', label: 'High-End VIP Gifts' }
        ],
        keyFeatures: [
          'Concealed neodymium magnetic snap closure',
          'Heavyweight 1200–1800gsm non-bending greyboard core',
          'Custom velvet, foam, or satin interior trays',
          'Hot foil stamping and soft-touch lamination'
        ],
        material: '1200gsm – 1800gsm Solid Greyboard wrapped in Specialty Art Paper',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'ribbon-fliptop',
        number: 2,
        title: 'Ribbon Flip Top',
        shortTitle: '2. Ribbon Flip Top',
        description: 'Features a soft woven satin or grosgrain ribbon pull tab for opening the hinged lid, adding a boutique couture feel.',
        thumb: '/grid-fliptop.png',
        mainImage: '/grid-fliptop.png',
        gallery: ['/grid-fliptop.png', '/grid-tuck.png'],
        bestFor: [
          { icon: '👗', label: 'Fashion & Silk Accessories' },
          { icon: '💍', label: 'Fine Jewelry & Keepsakes' },
          { icon: '🍫', label: 'Artisanal Chocolates' }
        ],
        keyFeatures: [
          'Custom branded ribbon pull tab',
          'Smooth opening hinged lid construction',
          'High structural rigidity that lasts forever',
          'Embossed logo presentation'
        ],
        material: '1400gsm Premium Rigid Chipboard with Matte Art Wrap',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'hinged-rigid',
        number: 3,
        title: 'Hinged Lid Rigid Box',
        shortTitle: '3. Hinged Lid Rigid Box',
        description: 'A classic rigid box where the lid stays permanently attached to the base along the back spine, opening like a book or presentation case.',
        thumb: '/grid-fliptop.png',
        mainImage: '/grid-fliptop.png',
        gallery: ['/grid-fliptop.png', '/grid-gable.png'],
        bestFor: [
          { icon: '📚', label: 'Collector Editions & Games' },
          { icon: '🏆', label: 'Awards & Commemorative Sets' },
          { icon: '💄', label: 'Multi-Piece Beauty Sets' }
        ],
        keyFeatures: [
          'Sturdy reinforced spine hinge',
          'Lid stays attached and upright during display',
          'Pre-assembled ready to pack out of the box',
          'Premium inner lid printing available'
        ],
        material: '1500gsm Heavy Greyboard with Soft-Touch Paper',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  },
  {
    id: 'gable',
    slug: 'gable-boxes',
    title: 'Gable Box',
    eyebrow: 'PACKAGING TYPE',
    description: 'A handle-top carrier box, similar in function to a gift bag but in sturdy box form with easy carrying.',
    cardDescription: 'Handle-top carrier',
    image: '/main_page_boxes/gablebox-1.webp',
    cardImage: '/main_page_boxes/gablebox-1.webp',
    cardHoverImage: '/main_page_boxes/gablebox-2.webp',
    features: [
      { id: 'durable', label: 'Built-in Handle', icon: 'shield' },
      { id: 'eco', label: 'Biodegradable', icon: 'leaf' },
      { id: 'custom', label: 'Custom Die-Cuts', icon: 'custom' }
    ],
    bestForSummary: 'Bakery items, gift hampers, party favors, takeaway food.',
    subTypes: [
      {
        id: 'standard-gable',
        number: 1,
        title: 'Standard Gable Box',
        shortTitle: '1. Standard Gable Box',
        description: 'The iconic peaked gable roof box with an integrated die-cut handle on top, combining carrying bag and box in one.',
        thumb: '/grid-gable.png',
        mainImage: '/grid-gable.png',
        gallery: ['/grid-gable.png', '/grid-corrugate.png'],
        bestFor: [
          { icon: '🎂', label: 'Bakery & Pastry Takeaway' },
          { icon: '🎁', label: 'Party Favors & Gift Hampers' },
          { icon: '🍔', label: 'Gourmet Takeaway Food' },
          { icon: '🎉', label: 'Corporate Event Swag' }
        ],
        keyFeatures: [
          'Convenient integrated carry handle',
          'Self-locking bottom for rapid packing',
          'Eliminates the cost of separate shopping bags',
          'Ships flat to save storage space'
        ],
        material: '18pt – 24pt Coated SBS / White Paperboard',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'window-gable',
        number: 1,
        title: 'Window Gable Box',
        shortTitle: '2. Window Gable Box',
        description: 'Features a crystal-clear transparent PET/PLA window on the front face to display the tempting product inside.',
        thumb: '/grid-gable.png',
        mainImage: '/grid-gable.png',
        gallery: ['/grid-gable.png', '/grid-tuck.png'],
        bestFor: [
          { icon: '🧁', label: 'Cupcakes & Decorated Cakes' },
          { icon: '🍪', label: 'Artisanal Cookies & Sweets' },
          { icon: '🧴', label: 'Bath Bombs & Soaps' }
        ],
        keyFeatures: [
          'Clear food-grade display window',
          'Showcases product freshness and vibrant colors',
          'Sturdy handle supports heavier contents',
          'Biodegradable window film options available'
        ],
        material: '20pt Food-Safe Virgin Paperboard with Clear Window',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'kraft-gable',
        number: 3,
        title: 'Kraft Gable Box',
        shortTitle: '3. Kraft Gable Box',
        description: 'Made from unbleached natural eco-friendly kraft paperboard, offering an earthy, rustic, organic farm-to-table aesthetic.',
        thumb: '/grid-gable.png',
        mainImage: '/grid-gable.png',
        gallery: ['/grid-gable.png', '/grid-display.png'],
        bestFor: [
          { icon: '🌿', label: 'Organic & Farm Goods' },
          { icon: '☕', label: 'Coffee Beans & Granola' },
          { icon: '🧼', label: 'Handcrafted Natural Soaps' }
        ],
        keyFeatures: [
          '100% Recycled unbleached natural kraft',
          'Rustic eco-conscious brand appearance',
          'Printed with non-toxic soy-based inks',
          'Compostable & biodegradable'
        ],
        material: '100% Recycled Natural Brown Kraft Board',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  },
  {
    id: 'display',
    slug: 'display-boxes',
    title: 'Display Box',
    eyebrow: 'PACKAGING TYPE',
    description: 'A retail counter box that comes with multiple compartments and dividers designed to organize and sell products at the point of purchase.',
    cardDescription: 'Retail counter display',
    image: '/main_page_boxes/display-1.webp',
    cardImage: '/main_page_boxes/display-1.webp',
    cardHoverImage: '/main_page_boxes/display-2.webp',
    features: [
      { id: 'durable', label: 'Counter Ready', icon: 'shield' },
      { id: 'eco', label: 'Eco Board', icon: 'leaf' },
      { id: 'custom', label: 'Header Card Area', icon: 'custom' }
    ],
    bestForSummary: 'Displaying multiple products together in retail stores – snacks, small gadgets, cosmetic samples.',
    subTypes: [
      {
        id: 'cdu-display',
        number: 1,
        title: 'Counter Display Box (CDU)',
        shortTitle: '1. Counter Display Box (CDU)',
        description: 'Compact point-of-sale display unit designed to sit directly on checkout counters to drive high-margin impulse sales.',
        thumb: '/grid-display.png',
        mainImage: '/grid-display.png',
        gallery: ['/grid-display.png', '/grid-corrugate.png'],
        bestFor: [
          { icon: '🏬', label: 'Checkout Counter Items' },
          { icon: '💄', label: 'Lip Balms & Cosmetic Samples' },
          { icon: '🍫', label: 'Candy & Energy Bars' },
          { icon: '🔌', label: 'Cables & Small Gadgets' }
        ],
        keyFeatures: [
          'Compact footprint fits standard retail counters',
          'Transforms from shipping shipper into counter display',
          'Vivid full-color branding catches shopper attention',
          'Durable corrugated or thick SBS chipboard'
        ],
        material: 'Heavy Fluted Corrugated or 24pt Coated SBS Board',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'divider-display',
        number: 2,
        title: 'Compartment / Divider Display Box',
        shortTitle: '2. Compartment / Divider Box',
        description: 'Features custom internal cardboard grid dividers and separate slots to keep multiple bottles, tubes, or jars upright and neatly organized.',
        thumb: '/grid-display.png',
        mainImage: '/grid-display.png',
        gallery: ['/grid-display.png', '/grid-tuck.png'],
        bestFor: [
          { icon: '🧪', label: 'Vape Liquids & Dropper Bottles' },
          { icon: '💅', label: 'Nail Polishes & Serums' },
          { icon: '🖊️', label: 'Pens & Stationary' },
          { icon: '🧴', label: 'Travel-Size Toiletries' }
        ],
        keyFeatures: [
          'Individual custom-sized product slots',
          'Prevents bottles from shifting or knocking in transit',
          'Clean organized presentation for customers',
          'Removable or fixed divider partitions'
        ],
        material: 'Heavyweight Coated Paperboard with Sturdy Grid Inserts',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'header-display',
        number: 3,
        title: 'Header Display Box',
        shortTitle: '3. Header Display Box',
        description: 'Includes an upright promotional billboard header card that rises above the products, displaying key branding, pricing, and promotional messaging.',
        thumb: '/grid-display.png',
        mainImage: '/grid-display.png',
        gallery: ['/grid-display.png', '/grid-fliptop.png'],
        bestFor: [
          { icon: '📢', label: 'Promotional Product Launches' },
          { icon: '🏷️', label: 'Seasonal Retail Merchandising' },
          { icon: '🍬', label: 'Packaged Snacks & Chews' }
        ],
        keyFeatures: [
          'Eye-level billboard header card for branding',
          'Tear-away lid that folds up into the header',
          'High-contrast gloss or matte printing',
          'Easy in-store setup with zero tools'
        ],
        material: 'High-Density Corrugated E-Flute with Clay Coating',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  },
  {
    id: 'pouches',
    slug: 'bags-and-pouches',
    title: 'Bags',
    eyebrow: 'PACKAGING TYPE',
    description: 'Flexible packaging made from high-barrier plastic or paper-based materials for lightweight, airtight freshness.',
    cardDescription: 'Flat & stand-up pouch',
    image: '/main_page_boxes/bag-1.webp',
    cardImage: '/main_page_boxes/bag-1.webp',
    cardHoverImage: '/main_page_boxes/bag-2.webp',
    features: [
      { id: 'durable', label: 'Airtight Barrier', icon: 'shield' },
      { id: 'eco', label: 'Recyclable Mono-PE', icon: 'leaf' },
      { id: 'custom', label: 'Resealable Zip', icon: 'custom' }
    ],
    bestForSummary: 'Food items (coffee, snacks, spices), powders, liquids, or any product needing resealable packaging.',
    subTypes: [
      {
        id: 'flat-pouch',
        number: 1,
        title: 'Flat Pouch',
        shortTitle: '1. Flat Pouch',
        description: 'A simple flat bag with 3-side sealed edges, ideal for single-use samples, sheet masks, powders, and compact on-the-go items.',
        thumb: '/grid-bags.png',
        mainImage: '/grid-bags.png',
        gallery: ['/grid-bags.png', '/grid-corrugate.png'],
        bestFor: [
          { icon: '🧴', label: 'Single-Use Cosmetics & Masks' },
          { icon: '☕', label: 'Single-Drip Coffee & Tea Sachets' },
          { icon: '💊', label: 'Protein & Supplement Powders' },
          { icon: '🌶️', label: 'Seasonings & Spices' }
        ],
        keyFeatures: [
          'Ultra compact and lightweight for mailing',
          'Complete 3-side hermetic heat seal',
          'Tear notches for easy consumer opening',
          'High barrier against oxygen and moisture'
        ],
        material: 'Multi-Layer Foil Laminate / Matte MOPP / Kraft Foil',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'standup-pouch',
        number: 2,
        title: 'Stand-up Pouch (Doypack)',
        shortTitle: '2. Stand-up Pouch (Doypack)',
        description: 'Engineered with a bottom gusset that expands to allow the bag to stand upright independently on retail shelves for maximum brand visibility.',
        thumb: '/grid-bags.png',
        mainImage: '/grid-bags.png',
        gallery: ['/grid-bags.png', '/grid-tuck.png'],
        bestFor: [
          { icon: '☕', label: 'Coffee Beans & Loose Leaf Tea' },
          { icon: '🥜', label: 'Nuts, Dried Fruits & Granola' },
          { icon: '🐾', label: 'Pet Food & Treats' },
          { icon: '🛁', label: 'Bath Salts & Scrubs' }
        ],
        keyFeatures: [
          'Stands upright for prime retail shelf presentation',
          'High capacity with expanding bottom gusset',
          'Available with transparent product window',
          'Recyclable mono-material PE options'
        ],
        material: 'Food-Grade Multi-Layer Barrier Foil / Eco Mono-PE',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      },
      {
        id: 'zipper-pouch',
        number: 3,
        title: 'Zipper Pouch',
        shortTitle: '3. Zipper Pouch',
        description: 'Includes a heavy-duty resealable press-to-close zip lock that keeps powders, snacks, and dried goods fresh after repeated openings.',
        thumb: '/grid-bags.png',
        mainImage: '/grid-bags.png',
        gallery: ['/grid-bags.png', '/grid-fliptop.png'],
        bestFor: [
          { icon: '🍪', label: 'Resealable Snack Foods' },
          { icon: '🌿', label: 'Herbs & Dietary Powders' },
          { icon: '🧼', label: 'Laundry & Dish Pods' }
        ],
        keyFeatures: [
          'Airtight resealable zipper closure',
          'Locks in freshness and aroma after opening',
          'Heat-sealable top with tear notches',
          'Hang hole available for peg displays'
        ],
        material: 'Glossy / Matte Barrier Laminate with Resealable Grip Zipper',
        customizations: ['Size', 'Print', 'Finish', 'Insert']
      }
    ]
  }
];

export function getPackagingTypeById(id) {
  return packagingTypes.find((item) => item.id === id || item.slug === id) || packagingTypes[0];
}
