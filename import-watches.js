const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Sanity client config - UPDATE THESE VALUES
const client = createClient({
  projectId: "3y81qruq", // Get from sanity.config.ts
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk5OrmxHc8xBw7UQw6kinQKgM5VJ6azhPFCSlGjokjEexqg3xuerDk6xNvjQXhCKoGxI7Ide5uAmghhtRQ4KO8M66GFQvlMQZUeMH1hLEAbPAJjhustRolHc4UNcxYfu4N0nj6MTrPZFK31K4k88nWr6tqznECJ5sYaFUF7nVwMD32zk8qMJ', // Get from sanity.io/manage -> API -> Tokens
  useCdn: false,
});

// Watch data based on your inventory images
const watches = [
  {
    name: 'Rolex Datejust 36 Blue Dial',
    reference: '126334',
    collection: 'datejust',
    price: 12500,
    year: 2023,
    caseDiameter: '36mm',
    dialColor: 'Blue',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: true,
    description: 'Beautiful Rolex Datejust with stunning blue dial. Complete set with box and papers.',
    images: ['date-just-blue-dial 126334 (1).jpg', 'date-just-blue-dial 126334 (2).jpg', 'date-just-blue-dial 126334 (3).jpg'],
  },
  {
    name: 'Rolex Daytona "Pikachu" Yellow Gold',
    reference: '126508',
    collection: 'daytona',
    price: 52000,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Yellow',
    material: 'yellow-gold',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: true,
    description: 'The coveted "Pikachu" Daytona in yellow gold with bright yellow dial.',
    images: ['daytona-pikachu 126508 (1).jpg', 'daytona-pikachu 126508 (2).jpg', 'daytona-pikachu (3).jpg'],
  },
  {
    name: 'Rolex Daytona Racing Dial',
    reference: '116509',
    collection: 'daytona',
    price: 48000,
    year: 2022,
    caseDiameter: '40mm',
    dialColor: 'Racing',
    material: 'white-gold',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'White gold Daytona with the iconic racing dial configuration.',
    images: ['daytona-racing-dial 116509 (1).jpg', 'daytona-racing-dial 116509 (2).jpg', 'daytona-racing-dial 116509 (3).jpg'],
  },
  {
    name: 'Rolex GMT-Master II "Batgirl"',
    reference: '126710',
    collection: 'gmt-master',
    price: 16500,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: true,
    description: 'GMT-Master II with black and blue ceramic bezel on Jubilee bracelet.',
    images: ['gmt-batgirl 126710 (1).jpg', 'gmt-batgirl 126710 (2).jpg', 'gmt-batgirl 126710 (3).jpg'],
  },
  {
    name: 'Rolex GMT-Master II "Batman"',
    reference: '126710',
    collection: 'gmt-master',
    price: 15800,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'GMT-Master II with black and blue ceramic bezel on Oyster bracelet.',
    images: ['gmt-batman 126710 (1).jpg', 'gmt-batman 126710 (2).jpg', 'gmt-batman 126710 (3).jpg'],
  },
  {
    name: 'Rolex GMT-Master II "Bruce" BLNR',
    reference: '126710',
    collection: 'gmt-master',
    price: 15500,
    year: 2022,
    caseDiameter: '40mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'very-good',
    box: true,
    papers: true,
    featured: false,
    description: 'Classic GMT-Master II BLNR with black and blue bezel.',
    images: ['gmt-bruce 126710 (1).jpg', 'gmt-bruce 126710 (2).jpg', 'gmt-bruce 126710 (3).jpg'],
  },
  {
    name: 'Rolex GMT-Master II "Pepsi" Jubilee',
    reference: '126710',
    collection: 'gmt-master',
    price: 21500,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: true,
    description: 'The iconic Pepsi bezel GMT-Master II on Jubilee bracelet.',
    images: ['gmt-pepsi-jub 126710 (1).jpg', 'gmt-pepsi-jub 126710 (2).jpg', 'gmt-pepsi-jub 126710 (3).jpg'],
  },
  {
    name: 'Rolex GMT-Master II "Sprite"',
    reference: '126720',
    collection: 'gmt-master',
    price: 19500,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'The left-handed GMT-Master II with green and black "Sprite" bezel.',
    images: ['gmt-sprite 126720 (1).jpg', 'gmt-sprite 126720 (2).jpg', 'gmt-sprite 126720 (3).jpg'],
  },
  {
    name: 'Rolex Sea-Dweller "James Cameron"',
    reference: '136660',
    collection: 'sea-dweller',
    price: 14800,
    year: 2023,
    caseDiameter: '44mm',
    dialColor: 'Blue/Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'Deep Sea with the stunning D-Blue dial, also known as the "James Cameron".',
    images: ['james-cameron 136660 (1).jpg', 'james-cameron 136660 (2).jpg', 'james-cameron 136660 (3).jpg'],
  },
  {
    name: 'Rolex Submariner Date "Bluesey"',
    reference: '126618LB',
    collection: 'submariner',
    price: 38500,
    year: 2023,
    caseDiameter: '41mm',
    dialColor: 'Blue',
    material: 'yellow-gold',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: true,
    description: 'Yellow gold Submariner with blue dial and bezel - the classic "Bluesey".',
    images: ['sub-date-yellow gold-bluesey 126618lb (1).jpg', 'sub-date-yellow gold-bluesey 126618lb (2).jpg', 'sub-date-yellow gold-bluesey 126618lb (3).jpg'],
  },
  {
    name: 'Rolex Submariner No Date',
    reference: '124060',
    collection: 'submariner',
    price: 10500,
    year: 2023,
    caseDiameter: '41mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'The purist\'s choice - Submariner without date for clean symmetry.',
    images: ['sub-no-date 124060 (1).jpg', 'sub-no-date 124060 (2).jpg', 'sub-no-date 124060 (3).jpg'],
  },
  {
    name: 'Rolex Submariner Date Two-Tone',
    reference: '126613LN',
    collection: 'submariner',
    price: 16800,
    year: 2023,
    caseDiameter: '41mm',
    dialColor: 'Black',
    material: 'two-tone',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'Steel and yellow gold Submariner - the perfect balance of luxury and sport.',
    images: ['sub-two-tones 126613ln (1).jpg', 'sub-two-tones 126613ln (2).jpg', 'sub-two-tones 126613ln (3).jpg'],
  },
  {
    name: 'Rolex Yacht-Master 40 Blue Dial',
    reference: '126622',
    collection: 'yacht-master',
    price: 14200,
    year: 2023,
    caseDiameter: '40mm',
    dialColor: 'Blue',
    material: 'steel',
    condition: 'excellent',
    box: true,
    papers: true,
    featured: false,
    description: 'Yacht-Master with Rolesium case and beautiful blue dial.',
    images: ['yacht-master blue 126622 (1).jpg', 'yacht-master blue 126622 (2).jpg', 'yacht-master blue 126622 (3).jpg'],
  },
  {
    name: 'Rolex Yacht-Master 42 Titanium',
    reference: '226627',
    collection: 'yacht-master',
    price: 24500,
    year: 2023,
    caseDiameter: '42mm',
    dialColor: 'Black',
    material: 'steel',
    condition: 'unworn',
    box: true,
    papers: true,
    featured: true,
    description: 'The new RLX Titanium Yacht-Master - lightweight and incredibly comfortable.',
    images: ['yacht-master-titanium 226627 (1).jpg', 'yacht-master-titanium 226627 (2).jpg', 'yacht-master-titanium 226627 (3).jpg'],
  },
];

// Helper to create slug from name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Upload image to Sanity
async function uploadImage(imagePath) {
  const fullPath = path.join(__dirname, 'public/inventory', imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  Image not found: ${imagePath}`);
    return null;
  }
  
  const imageBuffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: imagePath,
  });
  
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
  };
}

// Import a single watch
async function importWatch(watchData) {
  console.log(`\n📦 Importing: ${watchData.name}`);
  
  // Upload images
  const uploadedImages = [];
  for (const imagePath of watchData.images) {
    const image = await uploadImage(imagePath);
    if (image) {
      uploadedImages.push(image);
      console.log(`  ✅ Uploaded: ${imagePath}`);
    }
  }
  
  // Create watch document
  const doc = {
    _type: 'watch',
    name: watchData.name,
    slug: {
      _type: 'slug',
      current: createSlug(watchData.name),
    },
    reference: watchData.reference,
    price: watchData.price,
    status: 'available',
    collection: watchData.collection,
    year: watchData.year,
    caseDiameter: watchData.caseDiameter,
    dialColor: watchData.dialColor,
    material: watchData.material,
    condition: watchData.condition,
    box: watchData.box,
    papers: watchData.papers,
    description: watchData.description,
    featured: watchData.featured,
    images: uploadedImages,
  };
  
  const created = await client.create(doc);
  console.log(`  ✅ Created watch: ${created._id}`);
  
  return created;
}

// Main import function
async function runImport() {
  console.log('🚀 Starting watch import...\n');
  console.log(`Found ${watches.length} watches to import\n`);
  
  for (const watch of watches) {
    try {
      await importWatch(watch);
    } catch (error) {
      console.error(`  ❌ Error importing ${watch.name}:`, error.message);
    }
  }
  
  console.log('\n✨ Import complete!');
}

runImport();



