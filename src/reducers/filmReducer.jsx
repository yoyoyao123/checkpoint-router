import { GET_FILMS } from '../Actions/Types';

const initialState = {
    films : [{   id : 1,    
        title : "l'empire du mensonge", 
        image : 'yoyo2.jpg', 
        description : "feuilleton",  
        duration: "2:45min" , 
        videoLink :  "https://www.youtube.com/watch?v=4R_0mVVMWCE" 
    },

     {id : 2,
      title : "L'usupatrice",
      image :"OIP.jpg",
      description : "Feuilleton",
      duration : "2:45min",
      videoLink : "https://www.youtube.com/watch?v=P7Z8vXL3CuQ" 
    },

       {id : 3,
        title : "After",
       image : "OIP (5).jpg",
       description :" Romance",
        duration : "2:45min" ,
         videoLink :"https://www.youtube.com/watch?v=7hCDXr0S2aQ" 
    },
    


       {id : 4,
       title : "Henriette Tubman",
      image : "OIP (2).jpg",
      description : "Lesclavage", 
     duration : "2:45min" ,
     videoLink : "https://www.youtube.com/watch?v=16AbnfOlU3E"
  },


     {id : 5,
     title : "Tu ne tueras point",
      image : "OIP (1).jpg",
     description : "Histoir vrai",
      duration :"2:45min",
      videoLink : "https://www.youtube.com/watch?v=h1Jv5WdOrz8" 
    },


  {id : 6,
     title : "Attaque a mubai",
      image :"OIP (3).jpg", 
    description : "Teroriste", 
     duration :"2:45min" ,
     videoLink : "https://www.youtube.com/watch?v=K1JDTHJgvRM"
     },


     {id : 7,
     title : "La chronique de Bridgerton"
     , image : "yoyo1.jpg",
     description : "Romance",
      duration : "2:45min",
     videoLink : "https://www.youtube.com/watch?v=txAp6X4ywRI"
     },

   {id : 8,
     title : "La passion du Christ",
      image :"OIP (1).jpg ",
    description : "La mort du Christ", 
     duration : "2:45min",
       videoLink : "https://www.youtube.com/watch?v=zXegbNW2OXU"
       },
]

};
export function filmReducer (state = initialState ,action){
    const { type, payload} = action;

    switch(type) {
        case GET_FILMS :
            return {
                ...state,
                films: payload
            };
            default:
                return state
    }
}

