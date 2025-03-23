import React from 'react';

const LoginPage = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      backgroundColor: '#000000',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Left side - Image and marketing */}
      <div style={{
        display: 'flex',
        width: '50%',
        backgroundColor: '#121212',
        position: 'relative',
        padding: '24px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        
        {/* Image container */}
        <div style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Mannequin image */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '20px'
            }}></div>
          </div>
        </div>
        
        <div style={{
          marginTop: 'auto',
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: '22px',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>Find your job with us</h2>
          <p style={{
            color: '#b3b3b3',
            fontSize: '14px'
          }}>
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
      
      {/* Right side - Login form */}
      <div style={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <h1 style={{
              fontSize: '24px',
              color: 'white',
              fontWeight: 'bold'
            }}>Welcome back</h1>
            <p style={{
              color: '#a0a0a0',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              To use the service, log in using the method convenient for you. Enjoy!
            </p>
          </div>
          
          <button style={{
            width: '100%',
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            border: '1px solid #333333',
            cursor: 'pointer'
          }}>
            <span style={{marginRight: '8px'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg></span>
            Sign in with Google
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '16px 0'
          }}>
            <div style={{
              flexGrow: 1,
              height: '1px',
              backgroundColor: '#333333'
            }}></div>
            <span style={{
              padding: '0 16px',
              fontSize: '14px',
              color: '#777777'
            }}>or sign with email</span>
            <div style={{
              flexGrow: 1,
              height: '1px',
              backgroundColor: '#333333'
            }}></div>
          </div>
          
          <div>
            <div style={{marginBottom: '16px'}}>
              <label style={{
                display: 'block',
                color: '#a0a0a0',
                fontSize: '14px',
                marginBottom: '4px'
              }}>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                style={{
                  width: '94%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333333',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <div style={{marginBottom: '16px'}}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <label style={{
                  color: '#a0a0a0',
                  fontSize: '14px'
                }}>Password</label>
                <a href="#" style={{
                  color: '#a0a0a0',
                  fontSize: '14px',
                  textDecoration: 'none'
                }}>Forgot</a>
              </div>
              <div style={{position: 'relative'}}>
                <input
                  type="password"
                  placeholder="Enter password"
                  style={{
                    width: '94%',
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
              marginTop: '8px'
            }}>
              Sign in
            </button>
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '24px'
          }}>
            <p style={{
              color: '#a0a0a0',
              fontSize: '14px'
            }}>
              Don't have an account? <a href="#" style={{color: 'white', textDecoration: 'none'}}>Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;