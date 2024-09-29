import jwt from "jsonwebtoken";


export const ShouldBeLoggedIn = async(req,res) =>{

    console.log(req.userId); 
    res.status(200).json({message : "You are Authenticated"});
};
  
export const ShouldBeAdmin = async(req,res) => {
    const token = req.cookies.token

    if(!token) return res.status(401).json({ message : "Not Authenticated!"});

    jwt.verify(token, process.env.JWT_SECRET_KEY , async(err , payload) => {
        if(err) return res.status(403).json({ message : "Token  iS not valid"});
        if(!payload){
            return res.status(403).json({ message : "not autherised !"});
        }
    });

    res.status(200).json({message : "You are Authenticated"});
};  