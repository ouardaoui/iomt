const features = 
    {
        age :{
            title : "Age",
            subtitle :"age in years :",
            feature : [{}],
        },
  

        sex: {
            title : "Sex",
            subtitle : "your gender :",
            feature : [{
                type:"male", value :"1",id : 1 
            },{
                type :"female",value:"0",id: 2 
            }],
        },
        cp :{
            title : "Chest pain",
            subtitle :"Crushing or searing pain that radiates to your back,neck, jaw, shoulders, and one or both arms. Pain that lasts more than a few minutes, gets worse with activity(no pain), goes away and comes back(nonanginal pain), or varies in intensity(typical angina). Shortness of breath (typical angina)",
            feature : [{
                type :"typical angina" ,value :"1",id : 1
            },
            {
                type :"atypical angina" ,value :"2",id : 2
            },{
                type :"nonanginal pain" ,value :"3",id : 3
            },{
                type :"no pain" ,value :"4",id : 4
            }],
        },
        trestbps:{
            title : "Resting blood pressure ",
            subtitle :"Resting blood pressure (in mmHg) on admission to the hospital",
            feature : [{}],
        },
        chol:{
            title : "Serum cholesterol ",
            subtitle :"Serum cholesterol in mg/dl",
            feature : [{}],
        },
        fbs :{
            title : "Fasting blood",
            subtitle : "Fasting blood sugar higher than or less 120 mg/dl ",
            feature : [{
                type:"more than 120mg/dl", value :"1",id : 1 
            },{
                type :"less than 120 mg/dl",value:"0",id: 2 
            }],
        },
        restecg :{
            title : "Resting electrocardigram",
            subtitle :"The resting electrocardiogram is a test that measures the electrical activity of the heart.",
            feature : [{
                type :"normal" ,value :"0",id : 1
            },
            {
                type :"ST-T wave abnormality" ,value :"1",id : 2
            },{
                type :" probable" ,value :"2",id : 3
            }
            ],
        },
        thalach :{
            title : "Maximum heart rate ",
            subtitle :"A thallium stress test is a nuclear imaging test that shows how well blood flows into your heart",
            feature : [{}],
        },
        exang: {
            title : "Exercise induced angina ",
            subtitle : "Stable angina is usually triggered by physical activity. When you climb stairs, exercise or walk, your heart demands more blood, but narrowed arteries slow down blood flow.",
            feature : [{
                type:"yes", value :"1",id : 1 
            },{
                type :"no",value:"0",id: 2 
            }],
        },
        oldpeak :{
            title : "ST depression induced by exercise relative to rest",
            subtitle :"Exercise induced ST segment depression is considered a reliable ECG finding for the diagnosis of obstructive coronary atherosclerosis. It has also been associated with a worse prognosis for patients with a documented coronary artery disease (CAD).",
            feature : [{}],
        },
        slope :{
            title : "Slope of the peak exercise ST segment",
            subtitle :"The ST segment shift relative to exercise-induced increments in heart rate, the ST/heart rate slope (ST/HR slope)",
            feature : [{
                type :"up-sloping" ,value :"1",id : 1
            },
            {
                type :"flat" ,value :"2",id : 2
            },{
                type :"down-sloping" ,value :"3",id : 3
            }
            ],
        },
        ca :{
            title : "Number of major vessels colored by fluoroscopy",
            subtitle :"(0 to 3)",
            feature : [{
                type :"0" ,value :"1",id : 1
            },
            {
                type :"1" ,value :"2",id : 2
            },{
                type :"2" ,value :"3",id : 3
            },{
                type :"3" ,value :"4",id : 4
            }],
        },
        thal :{
            title : "Thallium heart scan",
            subtitle :"uses a radioactive tracer to see how much blood is reaching different parts of your heart..",
            feature : [{
                type :"normal" ,value :"1",id : 1
            },
            {
                type :"fixed defect" ,value :"2",id : 2
            },{
                type :"reverdible defect" ,value :"3",id : 3
            }
            ],
        },
  
    }

export default features;