const fs = require('fs');
const configContent = fs.readFileSync('config.js', 'utf-8');
const urlMatch = configContent.match(/SUPABASE_URL\s*=\s*['"]([^'"]+)['"]/);
const SUPABASE_URL = urlMatch[1];
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ3ViY2ljanFrZ293eGdybW1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzM0NDMxOSwiZXhwIjoyMDk4OTIwMzE5fQ.jHTuMOfhI523DDPS1LfqAA06k9UhfVnKiyRTGnmPHAQ';

const idsToDelete = ['organisms_pop', 'biodiversity', 'biotech', 'biotech_app'];

async function deleteDups() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/neet_chapters?id=in.(${idsToDelete.join(',')})`, {
    method: 'DELETE',
    headers: {
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`
    }
  });
  if (res.ok) {
    console.log('Successfully deleted duplicates from Supabase!');
  } else {
    console.log('Failed:', await res.text());
  }
}
deleteDups();
