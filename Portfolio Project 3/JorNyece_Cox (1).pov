                                                     #include "colors.inc"  
#include "textures.inc"


#macro  Bounce_101( X )
 #if(X<1/2) (sin(pi*( X + 1/2)))
 #else      (sin(pi*(1-X + 1/2)))
 #end
#end //----------------------------
#declare Time = clock +0.00  ;
//---------------------------------





 light_source { 
  <25,28, -9>, White
 }    
 
 
 camera {
  angle    30
  location <0 , 0 ,-50.0>
  right    x*image_width/image_height
  look_at  <0 , 0, 0>
  rotate   <0,-360*(clock+0.10),0>  
  
  }  
  
   sphere {<0,0,0> 1 hollow
        texture{ pigment{
                gradient <0,1,0>
                color_map {
                    [0 color White*1]
                    [1 color Blue*3]
                        } 
                      }
                     }
                    scale 100 
                    translate <0,-25,0> 
                    }
   
   plane {  
         y,
         -1.7
         pigment { Green *.8} 
         } 
         
   
       
  
                        
             
 
      
      
   
    merge{
cone { 
    <0,-2,0>, 1 , <0,2,0>, 0
    //pigment { Red} 
    pigment{ quilted control0 1 control1 1
         scale 0.25 turbulence 0
         color_map{[0.0 color rgb <1,0,0>]
                   [0.7 color rgb <1,1,0>]
                   [1.0 color rgb <1,1,1>]
                  }//end of color_map (optionnal)
        } // end of pigment
        
    finish {ambient .4}
    rotate <180,0,0> 
    //translate <-3,-1,0>
    }                     
    
    
    
    
    

 
    sphere {   
   <0,3,0>, 1.5 
   
   pigment { White }  
   finish {ambient .4} 
   
 }  
    
    sphere {   
   <-.2,2,-.1>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <-1,0,.5>
 }  
 
 
     sphere {   
   <-1.2,2,1.03>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <.5,0,0>
 }  
 
 
 
 
 sphere {   
   <-1.4,2,-.3>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   //translate <2,0,0>
 }  
 
 sphere {   
   <-1.6,2,-.8>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <0.5,0,0>
 }  
   
   sphere {   
   <-1.5,2,-1.1>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <1,0,0>
 }  
   sphere {   
   <-1.5,2,-1.2>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <1.5,0,0>
 }   
 
 sphere {   
   <-1.5,2,-1.2>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <2,0,0>
 } 
          
              
   
    sphere {   
   <-1.4,2,-.8>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <2.5,0,0>
 }             
   
   
   
    sphere {   
   <-3.4,2,-.1>, .5 
   
   pigment { White}  
   finish {ambient .4} 
   translate <4.8,0,0>
 }            
         
         
    sphere {   
   <-1,2,.5>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <2.5,0,0>
 } 
        
 
 sphere {   
   <-2,2,1>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <3,0,0>
 } 
 
 
    sphere {   
   <-2,2,1.2>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <2.5,0,0>
 } 
    
    
      sphere {   
   <-3,2,1.3>, .5 
   
   pigment { White }  
   finish {ambient .4} 
   translate <3,0,0>
 } 
   
    rotate <0,40,25>
  }  
  
      
      
      union{
    sphere {   
   <-2,-.8,-.5>, .35 
   
   pigment { White }  
   finish {ambient .4} 
   }
     
     
     cone { 
    <-2,-.9,-.5>, .3 , <-2,0.2,0>, 0
    pigment { White } 
    finish {ambient .4}
   
    }   
        
       rotate <0,-15,0> 
        translate <0.25, Bounce_101(Time)*(1-0.15)+0.15,0>
    }                
    
    
       
    sphere {   
   <1.5,11,25>, 2.5 
   
   pigment { Yellow }  
   finish {brilliance  -.5}   
   }    