import axios from "axios";


const BASEURL = "https://bookstore.incubation.bridgelabz.com/bookstore_user"


export async function createUser(userObj:object,navigate:Function){
  await axios.post(`${BASEURL}/registration`,userObj).then(res => {
    const usertoken = res.data.result.accessToken
    localStorage.setItem("accessToken",usertoken)

    navigate("/book")
      }).catch(err => {
        navigate("/error")
          const error = err.response.data.error
          console.log(error);
          
        });
      }

      export async function Login(userObj:object,navigate:Function,setError:Function){
       await axios.post(`${BASEURL}/login`,userObj).then(res => {
          const usertoken = res.data.result.accessToken
          localStorage.setItem("accessToken",usertoken)
          navigate("/book")
          
            }).catch(err => {
              if(err?.response?.data){
                
                const error = err.response.data.error
               setError(error);
              }
                
              });
        
            }