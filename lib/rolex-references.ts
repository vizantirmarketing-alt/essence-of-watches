/**
 * Rolex reference guide data — model lines, production eras, and quick specs for buyers and collectors.
 * Reference numbers and eras are summarized from publicly documented Rolex production; not exhaustive.
 */

export type RolexReferenceEntry = {
  family: string;
  reference: string;
  model: string;
  production: string;
  description: string;
};

/** Filter pill values (excluding synthetic "All") */
export const ROLEX_REFERENCE_FAMILIES = [
  'Submariner',
  'GMT-Master',
  'Daytona',
  'Explorer',
  'Sea-Dweller',
  'Datejust',
  'Day-Date',
  'Oyster Perpetual',
  'Milgauss',
  'Air-King',
  'Yacht-Master',
  'Cellini',
  'Vintage',
] as const;

export type RolexReferenceFamily = (typeof ROLEX_REFERENCE_FAMILIES)[number];

export const rolexReferences: RolexReferenceEntry[] = [
  // Submariner
  { family: 'Submariner', reference: '124060', model: 'Submariner', production: '2020–present', description: '41mm steel, no date, black dial, Cerachrom bezel, Cal. 3230.' },
  { family: 'Submariner', reference: '126610LN', model: 'Submariner Date', production: '2020–present', description: '41mm steel, date, black dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '126610LV', model: 'Submariner Date "Starbucks"', production: '2020–present', description: '41mm steel, green Cerachrom bezel, black dial, Cal. 3235.' },
  { family: 'Submariner', reference: '126613LB', model: 'Submariner Date', production: '2020–present', description: '41mm Rolesor, blue dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '126613LN', model: 'Submariner Date', production: '2020–present', description: '41mm Rolesor, black dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '126618LB', model: 'Submariner Date', production: '2020–present', description: '41mm yellow gold, blue dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '126618LN', model: 'Submariner Date', production: '2020–present', description: '41mm yellow gold, black dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '126619LB', model: 'Submariner Date "Smurf"', production: '2020–present', description: '41mm white gold, blue dial & bezel, Cal. 3235.' },
  { family: 'Submariner', reference: '114060', model: 'Submariner', production: '2012–2020', description: '40mm steel, no date, "super case", Cerachrom bezel, Cal. 3130.' },
  { family: 'Submariner', reference: '116610LN', model: 'Submariner Date', production: '2010–2020', description: '40mm steel, black dial & bezel, Cerachrom, Cal. 3135.' },
  { family: 'Submariner', reference: '116610LV', model: 'Submariner Date "Hulk"', production: '2010–2020', description: '40mm steel, green dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '116613LB', model: 'Submariner Date', production: '2009–2020', description: '40mm Rolesor, blue dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '116613LN', model: 'Submariner Date', production: '2009–2020', description: '40mm Rolesor, black dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '116618LB', model: 'Submariner Date', production: '2008–2020', description: '40mm yellow gold, blue dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '116618LN', model: 'Submariner Date', production: '2008–2020', description: '40mm yellow gold, black dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '116619LB', model: 'Submariner Date "Smurf"', production: '2008–2020', description: '40mm white gold, blue dial & bezel, Cal. 3135.' },
  { family: 'Submariner', reference: '14060', model: 'Submariner', production: '1990–2012', description: '40mm steel, no date, aluminum bezel, Cal. 3000 / 3130.' },
  { family: 'Submariner', reference: '14060M', model: 'Submariner', production: '1999–2012', description: '40mm steel, no date, updated dial, Cal. 3130.' },
  { family: 'Submariner', reference: '16610', model: 'Submariner Date', production: '1988–2010', description: '40mm steel, aluminum bezel, date, Cal. 3135.' },
  { family: 'Submariner', reference: '16610LV', model: 'Submariner Date "Kermit"', production: '2003–2010', description: '40mm steel, green aluminum bezel, black dial, Cal. 3135.' },
  { family: 'Submariner', reference: '16613', model: 'Submariner Date', production: '1988–2009', description: '40mm Rolesor, blue or black dial, Cal. 3135.' },
  { family: 'Submariner', reference: '16618', model: 'Submariner Date', production: '1988–2008', description: '40mm yellow gold, blue or black dial, Cal. 3135.' },
  { family: 'Submariner', reference: '16800', model: 'Submariner Date', production: '1979–1988', description: '40mm steel, sapphire, matte then gloss dial, Cal. 3035.' },
  { family: 'Submariner', reference: '168000', model: 'Submariner Date "triple zero"', production: '1988–1990', description: '40mm steel, transitional, Cal. 3035.' },
  { family: 'Submariner', reference: '16808', model: 'Submariner Date', production: '1979–1988', description: '40mm yellow gold, nipple dial era, Cal. 3035.' },
  { family: 'Submariner', reference: '1680', model: 'Submariner Date', production: '1969–1979', description: '40mm steel or gold, first Sub date, red then white text, Cal. 1575.' },
  { family: 'Submariner', reference: '5512', model: 'Submariner', production: '1959–1980', description: '40mm steel, no date, chronometer-rated, gilt & matte dials, Cal. 1530–1570.' },
  { family: 'Submariner', reference: '5513', model: 'Submariner', production: '1962–1989', description: '40mm steel, no date, non-chrono dial text, iconic matte dial era, Cal. 1520–1530.' },
  { family: 'Submariner', reference: '16803', model: 'Submariner Date', production: '1984–1988', description: '40mm transitional Rolesor, acrylic then sapphire, Cal. 3035.' },

  // GMT-Master / II
  { family: 'GMT-Master', reference: '126710BLNR', model: 'GMT-Master II "Batgirl"', production: '2019–present', description: '40mm steel, blue/black bezel, Jubilee or Oyster, Cal. 3285.' },
  { family: 'GMT-Master', reference: '126710BLRO', model: 'GMT-Master II "Pepsi"', production: '2018–present', description: '40mm steel, red/blue Cerachrom, Jubilee, Cal. 3285.' },
  { family: 'GMT-Master', reference: '126711CHNR', model: 'GMT-Master II "Root Beer"', production: '2018–present', description: '40mm Rolesor, black/brown Cerachrom, Cal. 3285.' },
  { family: 'GMT-Master', reference: '126715CHNR', model: 'GMT-Master II "Root Beer"', production: '2018–present', description: '40mm Everose gold, black/brown bezel, Cal. 3285.' },
  { family: 'GMT-Master', reference: '126719BLRO', model: 'GMT-Master II', production: '2019–present', description: '40mm white gold, meteorite dial option, Pepsi bezel, Cal. 3285.' },
  { family: 'GMT-Master', reference: '126720VTNR', model: 'GMT-Master II "Sprite"', production: '2022–present', description: '40mm steel, green/black bezel, left crown, Cal. 3285.' },
  { family: 'GMT-Master', reference: '116710LN', model: 'GMT-Master II', production: '2007–2018', description: '40mm steel, black Cerachrom bezel, Cal. 3186.' },
  { family: 'GMT-Master', reference: '116710BLNR', model: 'GMT-Master II "Batman"', production: '2013–2019', description: '40mm steel, blue/black Cerachrom, Cal. 3186.' },
  { family: 'GMT-Master', reference: '116713LN', model: 'GMT-Master II', production: '2006–2018', description: '40mm Rolesor, black bezel, Cal. 3186.' },
  { family: 'GMT-Master', reference: '116718LN', model: 'GMT-Master II', production: '2005–2018', description: '40mm yellow gold, green dial options, Cal. 3186.' },
  { family: 'GMT-Master', reference: '116719BLRO', model: 'GMT-Master II', production: '2014–2018', description: '40mm white gold, Pepsi Cerachrom, Cal. 3186.' },
  { family: 'GMT-Master', reference: '16710', model: 'GMT-Master II', production: '1989–2007', description: '40mm steel, Pepsi/Coke/black inserts, sapphire, Cal. 3185.' },
  { family: 'GMT-Master', reference: '16713', model: 'GMT-Master II', production: '1989–2006', description: '40mm Rolesor, root beer and black, Cal. 3185.' },
  { family: 'GMT-Master', reference: '16718', model: 'GMT-Master II', production: '1989–2006', description: '40mm yellow gold, nipple to gloss dial, Cal. 3185.' },
  { family: 'GMT-Master', reference: '16700', model: 'GMT-Master II', production: '1988–2001', description: '40mm steel, slim case, black bezel, Cal. 3075.' },
  { family: 'GMT-Master', reference: '16760', model: 'GMT-Master II "Fat Lady"', production: '1983–1988', description: '40mm steel, thicker case, red/black Coke, Cal. 3085.' },
  { family: 'GMT-Master', reference: '1675', model: 'GMT-Master', production: '1959–1980', description: '40mm steel/gold, Pepsi/Coke/root beer, acrylic, Cal. 1565/1575.' },
  { family: 'GMT-Master', reference: '16750', model: 'GMT-Master', production: '1981–1988', description: '40mm steel, quickset date, gloss dial, Cal. 3075.' },
  { family: 'GMT-Master', reference: '16753', model: 'GMT-Master', production: '1981–1988', description: '40mm Rolesor, root beer, Cal. 3075.' },
  { family: 'GMT-Master', reference: '6542', model: 'GMT-Master', production: '1954–1959', description: '38mm steel, bakelite Pepsi bezel, no crown guards, Cal. 1030.' },

  // Daytona
  { family: 'Daytona', reference: '126500LN', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm steel, ceramic bezel, updated case, Cal. 4131.' },
  { family: 'Daytona', reference: '126503', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm Rolesor, Cal. 4131.' },
  { family: 'Daytona', reference: '126506', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm platinum, ice blue dial, Cal. 4131.' },
  { family: 'Daytona', reference: '126508', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm yellow gold, Cal. 4131.' },
  { family: 'Daytona', reference: '126509', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm white gold, Cal. 4131.' },
  { family: 'Daytona', reference: '126515LN', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm Everose, rubber strap, Cal. 4131.' },
  { family: 'Daytona', reference: '126518LN', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm yellow gold, Oysterflex, Cal. 4131.' },
  { family: 'Daytona', reference: '126519LN', model: 'Cosmograph Daytona', production: '2023–present', description: '40mm white gold, Oysterflex, Cal. 4131.' },
  { family: 'Daytona', reference: '116500LN', model: 'Cosmograph Daytona', production: '2016–2023', description: '40mm steel, black or white dial, Cerachrom bezel, Cal. 4130.' },
  { family: 'Daytona', reference: '116503', model: 'Cosmograph Daytona', production: '2016–2023', description: '40mm Rolesor, multiple dials, Cal. 4130.' },
  { family: 'Daytona', reference: '116505', model: 'Cosmograph Daytona', production: '2011–present', description: '40mm Everose, Cerachrom bezel, Cal. 4130.' },
  { family: 'Daytona', reference: '116506', model: 'Cosmograph Daytona', production: '2013–2023', description: '40mm platinum, ice blue/brown bezel, Cal. 4130.' },
  { family: 'Daytona', reference: '116508', model: 'Cosmograph Daytona', production: '2016–2023', description: '40mm yellow gold, Cerachrom, Cal. 4130.' },
  { family: 'Daytona', reference: '116509', model: 'Cosmograph Daytona', production: '2016–2023', description: '40mm white gold, Cal. 4130.' },
  { family: 'Daytona', reference: '116515LN', model: 'Cosmograph Daytona', production: '2011–2023', description: '40mm Everose, Cerachrom, Oysterflex option, Cal. 4130.' },
  { family: 'Daytona', reference: '116518LN', model: 'Cosmograph Daytona', production: '2017–2023', description: '40mm yellow gold, Oysterflex, Cal. 4130.' },
  { family: 'Daytona', reference: '116519LN', model: 'Cosmograph Daytona', production: '2017–2023', description: '40mm white gold, Oysterflex, Cal. 4130.' },
  { family: 'Daytona', reference: '116520', model: 'Cosmograph Daytona', production: '2000–2016', description: '40mm steel, engraved metal bezel, Cal. 4130.' },
  { family: 'Daytona', reference: '116523', model: 'Cosmograph Daytona', production: '2000–2016', description: '40mm Rolesor, Cal. 4130.' },
  { family: 'Daytona', reference: '116528', model: 'Cosmograph Daytona', production: '2000–2016', description: '40mm yellow gold, Cal. 4130.' },
  { family: 'Daytona', reference: '16520', model: 'Cosmograph Daytona', production: '1988–2000', description: '40mm steel, Zenith El Primero-based auto chrono, Cal. 4030.' },
  { family: 'Daytona', reference: '16523', model: 'Cosmograph Daytona', production: '1988–2000', description: '40mm Rolesor, Cal. 4030.' },
  { family: 'Daytona', reference: '16528', model: 'Cosmograph Daytona', production: '1988–2000', description: '40mm yellow gold, Cal. 4030.' },
  { family: 'Daytona', reference: '6263', model: 'Cosmograph Daytona', production: '1971–1987', description: '37mm steel/gold, screw-down pushers, Valjoux 727, "Big Red" dials.' },
  { family: 'Daytona', reference: '6265', model: 'Cosmograph Daytona', production: '1971–1987', description: '37mm steel/gold, metal bezel variant, Valjoux 727.' },
  { family: 'Daytona', reference: '6239', model: 'Cosmograph Daytona', production: '1963–1969', description: '36mm steel, pump pushers, steel bezel, manual-wind Valjoux.' },

  // Explorer
  { family: 'Explorer', reference: '124270', model: 'Explorer', production: '2021–present', description: '36mm steel, black dial, 3-6-9, Cal. 3230.' },
  { family: 'Explorer', reference: '124273', model: 'Explorer', production: '2021–present', description: '36mm Rolesor, black dial, Cal. 3230.' },
  { family: 'Explorer', reference: '214270', model: 'Explorer', production: '2010–2021', description: '39mm steel, Mark I & II dials, Cal. 3132.' },
  { family: 'Explorer', reference: '114270', model: 'Explorer', production: '2001–2010', description: '36mm steel, gloss dial, solid end links, Cal. 3130.' },
  { family: 'Explorer', reference: '14270', model: 'Explorer', production: '1989–2001', description: '36mm steel, sapphire, gloss dial, Cal. 3000.' },
  { family: 'Explorer', reference: '1016', model: 'Explorer', production: '1963–1989', description: '36mm steel, 3-6-9, acrylic, gilt to matte dial, Cal. 1560/1570.' },
  { family: 'Explorer', reference: '226570', model: 'Explorer II', production: '2021–present', description: '42mm steel, white or black dial, orange hand, Cal. 3285.' },
  { family: 'Explorer', reference: '216570', model: 'Explorer II', production: '2011–2021', description: '42mm steel, orange 24h hand, Cal. 3187.' },
  { family: 'Explorer', reference: '16570', model: 'Explorer II', production: '1989–2011', description: '40mm steel, red or white 24h hand, Cal. 3185/3186.' },
  { family: 'Explorer', reference: '16550', model: 'Explorer II', production: '1985–1989', description: '40mm steel, transitional "cream" dials, Cal. 3085.' },

  // Sea-Dweller
  { family: 'Sea-Dweller', reference: '136668LB', model: 'Sea-Dweller', production: '2025–present', description: '44mm white gold, blue dial, RLX titanium case ring, Cal. 3235.' },
  { family: 'Sea-Dweller', reference: '126600', model: 'Sea-Dweller', production: '2017–present', description: '43mm steel, date, cyclops-free crystal, red line text, Cal. 3235.' },
  { family: 'Sea-Dweller', reference: '126603', model: 'Sea-Dweller', production: '2019–present', description: '43mm Rolesor, black dial, Cal. 3235.' },
  { family: 'Sea-Dweller', reference: '116600', model: 'Sea-Dweller 4000', production: '2014–2019', description: '40mm steel, ceramic bezel, Cal. 3135.' },
  { family: 'Sea-Dweller', reference: '16600', model: 'Sea-Dweller', production: '1988–2008', description: '40mm steel, helium valve, 1220m rating, Cal. 3135.' },
  { family: 'Sea-Dweller', reference: '16660', model: 'Sea-Dweller "Triple Six"', production: '1978–1989', description: '40mm steel, sapphire, first 4000ft rating, Cal. 3035.' },
  { family: 'Sea-Dweller', reference: '1665', model: 'Sea-Dweller "Double Red"', production: '1967–1978', description: '40mm steel, iconic red text dial, helium valve, Cal. 1575.' },
  { family: 'Sea-Dweller', reference: '126067', model: 'Deepsea Challenge', production: '2022–present', description: '50mm RLX titanium, 11,000m rating, Cal. 3230.' },
  { family: 'Sea-Dweller', reference: '136660', model: 'Deepsea', production: '2022–present', description: '44mm steel, D-blue or black dial, Cal. 3235.' },
  { family: 'Sea-Dweller', reference: '126660', model: 'Deepsea', production: '2018–2022', description: '44mm steel, redesigned case, Cal. 3235.' },
  { family: 'Sea-Dweller', reference: '116660', model: 'Deepsea', production: '2008–2018', description: '44mm steel, Ringlock, D-blue from 2014, Cal. 3135.' },

  // Datejust / Date
  { family: 'Datejust', reference: '126200', model: 'Datejust', production: '2018–present', description: '36mm steel, smooth bezel, Oyster or Jubilee, Cal. 3235.' },
  { family: 'Datejust', reference: '126201', model: 'Datejust', production: '2018–present', description: '36mm Rolesor, fluted Everose bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126231', model: 'Datejust', production: '2018–present', description: '36mm Rolesor, fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126233', model: 'Datejust', production: '2018–present', description: '36mm yellow Rolesor, fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126234', model: 'Datejust', production: '2018–present', description: '36mm steel, white gold fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126281', model: 'Datejust', production: '2018–present', description: '36mm Rolesor, diamond bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126284', model: 'Datejust', production: '2018–present', description: '36mm steel, diamond bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126300', model: 'Datejust 41', production: '2017–present', description: '41mm steel, smooth bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126331', model: 'Datejust 41', production: '2017–present', description: '41mm Rolesor, fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126333', model: 'Datejust 41', production: '2017–present', description: '41mm yellow Rolesor, fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '126334', model: 'Datejust 41', production: '2017–present', description: '41mm steel, white gold fluted bezel, Cal. 3235.' },
  { family: 'Datejust', reference: '116200', model: 'Datejust II', production: '2009–2016', description: '41mm steel, smooth bezel, Cal. 3136.' },
  { family: 'Datejust', reference: '116233', model: 'Datejust II', production: '2009–2016', description: '41mm Rolesor, fluted bezel, Cal. 3136.' },
  { family: 'Datejust', reference: '116234', model: 'Datejust II', production: '2009–2016', description: '41mm steel, white gold fluted bezel, Cal. 3136.' },
  { family: 'Datejust', reference: '16200', model: 'Datejust', production: '1988–1999', description: '36mm steel, engine-turned or smooth bezel, Cal. 3135.' },
  { family: 'Datejust', reference: '16220', model: 'Datejust', production: '1988–1999', description: '36mm steel, engine-turned bezel, Cal. 3135.' },
  { family: 'Datejust', reference: '16233', model: 'Datejust', production: '1988–2005', description: '36mm Rolesor, fluted bezel, Cal. 3135.' },
  { family: 'Datejust', reference: '16234', model: 'Datejust', production: '1988–2005', description: '36mm steel, white gold fluted bezel, Cal. 3135.' },
  { family: 'Datejust', reference: '1601', model: 'Datejust', production: '1959–1977', description: '36mm steel, pie-pan and non-pie-pan dials, Cal. 1570.' },
  { family: 'Datejust', reference: '1603', model: 'Datejust', production: '1962–1977', description: '36mm steel, engine-turned bezel, Cal. 1570.' },
  { family: 'Datejust', reference: '16013', model: 'Datejust', production: '1977–1988', description: '36mm Rolesor, acrylic then sapphire, quickset, Cal. 3035.' },
  { family: 'Datejust', reference: '16014', model: 'Datejust', production: '1977–1988', description: '36mm steel, white gold fluted bezel, Cal. 3035.' },
  { family: 'Datejust', reference: '79160', model: 'Lady-Datejust', production: '1990s–2000s', description: '26mm steel, various bezels, compact Datejust line.' },
  { family: 'Datejust', reference: '279160', model: 'Lady-Datejust 28', production: '2015–present', description: '28mm steel, modern Lady-Datejust, Cal. 2236.' },

  // Day-Date
  { family: 'Day-Date', reference: '228206', model: 'Day-Date 40', production: '2015–present', description: '40mm platinum, ice blue dial, President bracelet, Cal. 3255.' },
  { family: 'Day-Date', reference: '228235', model: 'Day-Date 40', production: '2015–present', description: '40mm Everose gold, Cal. 3255.' },
  { family: 'Day-Date', reference: '228238', model: 'Day-Date 40', production: '2015–present', description: '40mm yellow gold, Cal. 3255.' },
  { family: 'Day-Date', reference: '228239', model: 'Day-Date 40', production: '2015–present', description: '40mm white gold, Cal. 3255.' },
  { family: 'Day-Date', reference: '228348', model: 'Day-Date 40', production: '2015–present', description: '40mm yellow gold, diamond bezel, Cal. 3255.' },
  { family: 'Day-Date', reference: '218238', model: 'Day-Date II', production: '2008–2015', description: '41mm yellow gold, larger President, Cal. 3156.' },
  { family: 'Day-Date', reference: '218235', model: 'Day-Date II', production: '2008–2015', description: '41mm Everose, Cal. 3156.' },
  { family: 'Day-Date', reference: '118238', model: 'Day-Date', production: '2000–2015', description: '36mm yellow gold, concealed clasp President, Cal. 3155.' },
  { family: 'Day-Date', reference: '118239', model: 'Day-Date', production: '2000–2015', description: '36mm white gold, Cal. 3155.' },
  { family: 'Day-Date', reference: '118206', model: 'Day-Date', production: '2000–2015', description: '36mm platinum, Cal. 3155.' },
  { family: 'Day-Date', reference: '18238', model: 'Day-Date', production: '1988–2000', description: '36mm yellow gold, double quickset, Cal. 3155.' },
  { family: 'Day-Date', reference: '18038', model: 'Day-Date', production: '1977–1988', description: '36mm yellow gold, quickset date, Cal. 3055.' },
  { family: 'Day-Date', reference: '1803', model: 'Day-Date', production: '1958–1978', description: '36mm gold, pie-pan dials, acrylic, non-quickset, Cal. 1556.' },

  // Oyster Perpetual
  { family: 'Oyster Perpetual', reference: '124300', model: 'Oyster Perpetual 41', production: '2020–present', description: '41mm steel, colored lacquer dials, Cal. 3230.' },
  { family: 'Oyster Perpetual', reference: '126000', model: 'Oyster Perpetual 36', production: '2020–present', description: '36mm steel, vibrant dial colors, Cal. 3230.' },
  { family: 'Oyster Perpetual', reference: '277200', model: 'Oyster Perpetual 31', production: '2020–present', description: '31mm steel, Cal. 2232.' },
  { family: 'Oyster Perpetual', reference: '114300', model: 'Oyster Perpetual 39', production: '2015–2020', description: '39mm steel, dark rhodium, white, or red grape dial, Cal. 3132.' },
  { family: 'Oyster Perpetual', reference: '116000', model: 'Oyster Perpetual', production: '2012–2015', description: '36mm steel, smooth bezel, Cal. 3130.' },
  { family: 'Oyster Perpetual', reference: '114200', model: 'Oyster Perpetual', production: '2007–2015', description: '34mm steel, domed bezel, Cal. 3130.' },
  { family: 'Oyster Perpetual', reference: '67180', model: 'Oyster Perpetual', production: '1990s', description: '24mm steel ladies OP, quartz or automatic variants.' },

  // Milgauss
  { family: 'Milgauss', reference: '126400GV', model: 'Milgauss', production: '2023–present', description: '40mm steel, green sapphire, lightning seconds, Cal. 3230.' },
  { family: 'Milgauss', reference: '116400GV', model: 'Milgauss', production: '2007–2023', description: '40mm steel, green crystal, orange lightning bolt, Cal. 3131.' },
  { family: 'Milgauss', reference: '1019', model: 'Milgauss', production: '1963–1988', description: '38mm steel, antimagnetic shield, silver dial, Cal. 1580.' },

  // Air-King
  { family: 'Air-King', reference: '126900', model: 'Air-King', production: '2022–present', description: '40mm steel, updated crown guards & bracelet, Cal. 3230.' },
  { family: 'Air-King', reference: '116900', model: 'Air-King', production: '2016–2022', description: '40mm steel, black dial, green seconds, Cal. 3131.' },
  { family: 'Air-King', reference: '14000', model: 'Air-King', production: '1989–2007', description: '34mm steel, Explorer-style 3-6-9 or baton dial, Cal. 3000.' },
  { family: 'Air-King', reference: '5500', model: 'Air-King', production: '1957–1989', description: '34mm steel, various dial prints, Cal. 1520/1530.' },

  // Yacht-Master
  { family: 'Yacht-Master', reference: '126622', model: 'Yacht-Master 42', production: '2019–present', description: '42mm steel/platinum Rolesium, Cal. 3235.' },
  { family: 'Yacht-Master', reference: '126655', model: 'Yacht-Master 40', production: '2019–present', description: '40mm Everose gold, Cerachrom bezel, Oysterflex, Cal. 3235.' },
  { family: 'Yacht-Master', reference: '226658', model: 'Yacht-Master 42', production: '2022–present', description: '42mm yellow gold, Cal. 3235.' },
  { family: 'Yacht-Master', reference: '226659', model: 'Yacht-Master 42', production: '2019–present', description: '42mm white gold, Oysterflex, Cal. 3235.' },
  { family: 'Yacht-Master', reference: '116622', model: 'Yacht-Master 40', production: '2012–2019', description: '40mm steel/platinum, blue or rhodium dial, Cal. 3135.' },
  { family: 'Yacht-Master', reference: '116655', model: 'Yacht-Master 40', production: '2015–2019', description: '40mm Everose, Cerachrom, Oysterflex, Cal. 3135.' },
  { family: 'Yacht-Master', reference: '16622', model: 'Yacht-Master', production: '1999–2012', description: '40mm steel/platinum bezel, platinum dial accents, Cal. 3135.' },
  { family: 'Yacht-Master', reference: '16623', model: 'Yacht-Master', production: '1997–2012', description: '40mm Rolesor, gold bezel, Cal. 3135.' },
  { family: 'Yacht-Master', reference: '268621', model: 'Yacht-Master 37', production: '2016–present', description: '37mm Rolesor Everose, Cal. 2236.' },

  // Cellini
  { family: 'Cellini', reference: '50535', model: 'Cellini Moonphase', production: '2017–present', description: '39mm Everose, moonphase complication, Cal. 3195.' },
  { family: 'Cellini', reference: '50515', model: 'Cellini Date', production: '2014–present', description: '39mm Everose, date subdial, Cal. 3165.' },
  { family: 'Cellini', reference: '50519', model: 'Cellini Dual Time', production: '2014–present', description: '39mm white gold, second time zone, Cal. 3180.' },
  { family: 'Cellini', reference: '50509', model: 'Cellini Time', production: '2014–present', description: '39mm white gold, three-hand dress watch, Cal. 3132.' },
  { family: 'Cellini', reference: '50525', model: 'Cellini Time', production: '2014–present', description: '39mm Everose, guilloche dial, Cal. 3132.' },
  { family: 'Cellini', reference: '50539', model: 'Cellini Date', production: '2014–present', description: '39mm white gold, blue dial, Cal. 3165.' },

  // Vintage (cross-line classics & early Rolex)
  { family: 'Vintage', reference: '6538', model: 'Submariner "Big Crown"', production: '1958–1959', description: '37mm steel, 8mm crown, no crown guards, Bond association, Cal. 1030.' },
  { family: 'Vintage', reference: '6204', model: 'Submariner', production: '1953–1954', description: '37mm steel, first Submariner, small crown, Cal. A260 / 1000.' },
  { family: 'Vintage', reference: '6205', model: 'Submariner', production: '1954–1955', description: '37mm steel, Mercedes hand introduction, Cal. 1000.' },
  { family: 'Vintage', reference: '6610', model: 'Explorer', production: '1955–1963', description: '36mm steel, 3-6-9, gilt chapter ring dials, Cal. 1030.' },
  { family: 'Vintage', reference: '6694', model: 'Oysterdate / Precision', production: '1961–late 1980s', description: '34mm steel, manual-wind date; often seen with Air-King or Precision dials, Cal. 1215.' },
  { family: 'Vintage', reference: '1500', model: 'Oyster Perpetual Date', production: '1962–1983', description: '34mm steel, date, smooth bezel, Cal. 1570.' },
  { family: 'Vintage', reference: '1503', model: 'Oyster Perpetual Date', production: '1962–1983', description: '34mm gold-capped or steel, engine-turned bezel.' },
  { family: 'Vintage', reference: '5508', model: 'Submariner', production: '1958–1962', description: '37mm steel, small crown, no crown guards, gilt dials, Cal. 1530.' },
  { family: 'Vintage', reference: '6426', model: 'Precision', production: '1970s–1980s', description: '34mm steel, time-only Oyster, acrylic crystal, manual-wind.' },
];

export const ROLEX_REFERENCE_TOTAL = rolexReferences.length;
