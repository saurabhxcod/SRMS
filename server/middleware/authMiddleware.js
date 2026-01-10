import jwt from 'jsonwebtoken';

export const authMiddleware=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized",success:false})
        
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message:"Invalid token"})
        }
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized Access",success:false})
    }
}

