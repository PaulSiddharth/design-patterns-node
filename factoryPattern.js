// Factory function to create a user based on role and user info
const createUser = (role, userInfo) => {
    // Initialize a user object with common properties
    const user = {
      name: userInfo.name,
      password: userInfo.password
    };
  
    // Define specific additional information based on the role
    const specificInfo = {
      admin: () => ({ role: 'Admin', key: userInfo.key }),
      customer: () => ({ role: 'Customer', address: userInfo.address }),
      seller: () => ({ role: 'Seller', shopAddress: userInfo.shopAddress, contact_No: userInfo.contact_No })
    };
  
    // Get additional information based on the role provided
    const additionalInfo = specificInfo[role] ? specificInfo[role]() : null;
  
    // If an invalid role was specified, throw an error
    if (!additionalInfo) {
      throw new Error('Invalid role specified.');
    }
  
    // Combine the common user properties with additional role-specific properties
    return { ...user, ...additionalInfo };
  };
  
  // Create an Admin User instance
  const adminUser = createUser('admin', {
    name: 'Abhishek',
    password: 'Abhi1233',
    key: '#1244534-fadsv34'
  });
  
  // Create a Customer User instance
  const customerUser = createUser('customer', {
    name: 'John Doe',
    password: 'Password123',
    address: '123 Main St'
  });
  
  // Create a Seller User instance
  const sellerUser = createUser('seller', {
    name: 'Jane Smith',
    password: 'SellerPass',
    shopAddress: '456 Market St',
    contact_No: '123-456-7890'
  });
  
  // Log the Admin User details
  console.log('Admin User:', adminUser);
  
  // Log the Customer User details
  console.log('Customer User:', customerUser);
  
  // Log the Seller User details
  console.log('Seller User:', sellerUser);
  