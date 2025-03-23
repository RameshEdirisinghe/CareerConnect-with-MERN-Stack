import React from 'react';

const SignUpPage = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      backgroundColor: '#000000',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Left side - Marketing content */}
      <div style={{
        display: 'flex',
        width: '40%',
        backgroundColor: '#121212',
        position: 'relative',
        padding: '24px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{
          position: 'absolute',
          top: '24px',
          left: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{
              color: 'white',
              fontWeight: 'bold'
            }}>CarrerConnect</span>
          </div>
        </div>
        
        <div style={{
          marginTop: 'auto',
          marginBottom: 'auto'
        }}>
          <h2 style={{
            fontSize: '28px',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>Join our community</h2>
          <p style={{
            color: '#b3b3b3',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            Create an account to access all the features of our platform.
            Our online store creation platform will help you turn your idea into
            a successful business. We offer a wide range of tools and features
            that will allow you to create a turnkey store in a short time.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '24px'
          }}>
            <div style={{
              height: '4px',
              width: '24px',
              backgroundColor: 'white',
              borderRadius: '2px',
              marginRight: '4px'
            }}></div>
            <div style={{
              height: '4px',
              width: '4px',
              backgroundColor: '#6b6b6b',
              borderRadius: '50%',
              marginRight: '4px'
            }}></div>
            <div style={{
              height: '4px',
              width: '4px',
              backgroundColor: '#6b6b6b',
              borderRadius: '50%',
              marginRight: '4px'
            }}></div>
            <div style={{
              height: '4px',
              width: '4px',
              backgroundColor: '#6b6b6b',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Right side - Sign up form */}
      <div style={{
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '600px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <h1 style={{
              fontSize: '24px',
              color: 'white',
              fontWeight: 'bold'
            }}>Create your account</h1>
            <p style={{
              color: '#a0a0a0',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              Fill in the details below to get started
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px' // Increased gap between input fields
          }}>
            {/* First Name */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Last Name */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Email */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Birth Day */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Birth Day</label>
              <input
                type="date"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: '#a0a0a0',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Contact Number */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Contact Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* NIC Field */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>NIC Number</label>
              <input
                type="text"
                placeholder="Enter NIC number"
                style={{
                  width: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            {/* Password */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Password</label>
              <div style={{position: 'relative'}}>
                <input
                  type="password"
                  placeholder="Enter password"
                  style={{
                    width: '100%',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    color: 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
            
            {/* Confirm Password */}
            <div>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Confirm Password</label>
              <div style={{position: 'relative'}}>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  style={{
                    width: '100%',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    color: 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div style={{
            marginTop: '24px'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              color: '#a0a0a0',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                style={{
                  marginRight: '8px'
                }}
              />
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
            
          <button style={{
            width: '100%',
            backgroundColor: '#e0e0e0',
            color: '#121212',
            fontWeight: 'bold',
            padding: '12px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            marginTop: '24px'
          }}>
            Create Account
          </button>
          
          <div style={{
            textAlign: 'center',
            marginTop: '24px'
          }}>
            <p style={{
              color: '#a0a0a0',
              fontSize: '14px'
            }}>
              Already have an account? <a href="#" style={{color: 'white', textDecoration: 'none'}}>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;