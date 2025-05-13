const bs58 = require('bs58');
const fs = require('fs');

// Get the input string from command line arguments
const inputString = process.argv[2];

if (!inputString) {
    console.error('Please provide a base58 string as an argument');
    process.exit(1);
}

try {
    // Decode the base58 string to bytes
    const bytes = bs58.decode(inputString);
    
    // Convert to array of numbers
    const byteArray = Array.from(bytes);
    
    // Write to keypair.json
    fs.writeFileSync('keypair.json', JSON.stringify(byteArray));
    
    // Output success message
    console.log('Successfully created keypair.json');
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
} 