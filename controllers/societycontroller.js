import Society from "../models/Society.js";

class SocietyController{
    static societyadd = async (req,res) =>{
        try{
            const { 
                category,
            description,
            President,
            VicePresident,
            cover,
            GeneralSecretary,
            EventsHead,
            DesignHead,
            PRandOutreachHead,
            ContentHead
        } = req.body

        const newSociety = new Society({
            category:category,
            cover:cover,
            description:description,
            President:President,
            VicePresident:VicePresident,
            GeneralSecretary:GeneralSecretary,
            EventsHead:EventsHead,
            DesignHead:DesignHead,
            PRandOutreachHead:PRandOutreachHead,
            ContentHead:ContentHead
        })
        const result = await newSociety.save()
        res.status(201).send(result)
    }
        catch(err){
            console.log(err);
            res.status(500).json({message:"wrong"});
        }
    }

    static societies = async (req,res) =>{
        try{
            const result = await Society.find()
            res.send(result)

        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"wrong"});
        }
    }
}

export default SocietyController