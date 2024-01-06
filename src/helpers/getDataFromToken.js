import Jwt  from "jsonwebtoken";


export  const getDataFromToken=(request)=>{

    try {

       const encodedToken= request.cookies.get("token")?.value || "";

      const decodedToken= Jwt.verify(encodedToken, process.env.TOKEN_SECRET);

        return decodedToken.id;


    } catch (error) {

        throw new Error(error.message);
        
    }
}