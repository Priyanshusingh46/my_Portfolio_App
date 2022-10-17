import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Image,Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as  OpenAnything from 'react-native-openanything'
import call from 'react-native-phone-call'
var b = StatusBar.currentHeight;
export default function App() {
  const trigger=()=>{
  const args = {
    number: '9304011004', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
  }
  call(args).catch(console.error)
};
  return (
    <View style={styles.box}>
      
    <ScrollView>
        
      <View style={styles.outercountainer}>
      <View style={styles.imageWala}>
        <TouchableOpacity
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1l2248vzshPFUbUtkWTRuHYgGu37Tl02G/view?usp=sharing")}
        >
        <Image source={require('./Images/My_image.jpg')} style={styles.image}/> 
        </TouchableOpacity>
          
      <Text style={styles.text1}>Priyanshu Kumar Singh</Text> 
      </View>
      <TouchableOpacity
      onPress={()=>OpenAnything.Web("https://www.google.co.in/maps/place/Nagra+Patedha+Rd,+Sadhapur,+Chapra,+Bihar+841301/@25.7851259,84.735726,16.23z/data=!4m5!3m4!1s0x3992bae8ad1e75db:0xfcb654c75ebd7858!8m2!3d25.7856634!4d84.7373118")}
      >
      <View style={styles.Location}>
        <Icon name="tint" size={30}/>
      <Text style={styles.paragraph2}>Chapra Bihar </Text>   
      </View>
      </TouchableOpacity>
      </View>


      <View styles={styles.content}>
        <View>
          <Text style={styles.heading}>About</Text>
          <Text style={styles.paragraph}>Hi Developers,</Text>
          <Text style={styles.paragraph}>I am doing my specialization in Computer Science and Engineering  from Indian Institute Of Information And Technology Una. I like to learn and explore every technology exist around me. Belive in hard work!</Text>
        </View>
      </View>


      <View styles={styles.content}>
        <View>
          <Text style={styles.heading}>Academics</Text>

          <View style={styles.innerContaint}>
          <Text style={styles.paragraph6}>1.</Text>
          <Text style={styles.paragraph6}>IIIT Una(Under-Graduation)</Text>
          <Text style={styles.paragraph6}>2020-2024</Text>
          </View>

          <View style={styles.innerContaint}>
          <Text style={styles.paragraph6}>2.</Text>
          <Text style={styles.paragraph6}>RNP  Public  School (Inter)</Text>
          <Text style={styles.paragraph6}>2017-2019</Text>
          </View>


          <View style={styles.innerContaint}>
          <Text style={styles.paragraph6}>3.</Text>
          <Text style={styles.paragraph6}>Munam Public School(matric)</Text>
          <Text style={styles.paragraph16}>2015-2017</Text>
          </View>

          </View>
      </View>

      <View styles={styles.content1}>
      <Text style={styles.heading1}>Skills</Text>
        <View style={styles.newBox}>
          <View style={{marginRight:5,marginBottom:10}}>
          <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>C/C++</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>ReactJs</Text>
            </TouchableOpacity>
            <TouchableOpacity  styles={styles.box}>
              <Text style={styles.paragraph1}>Html</Text>
            </TouchableOpacity>

            <View style={{marginRight:5,marginBottom:10}}>
          <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>CSS</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>JavaScript</Text>
            </TouchableOpacity>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>MongoDb</Text>
            </TouchableOpacity>
         


            <View style={{marginRight:5,marginBottom:10}}>
          <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>Git/Github</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>ReactNative</Text>
            </TouchableOpacity>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>Python</Text>
            </TouchableOpacity>


            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>OOPS</Text>
            </TouchableOpacity>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>OS</Text>
            </TouchableOpacity>
            <TouchableOpacity styles={styles.box}>
              <Text style={styles.paragraph1}>Dbms</Text>
            </TouchableOpacity>
            </View>
          

          <View styles={styles.content}>
        <View>
          <Text style={styles.heading3}>Achievements</Text>
          <View style={styles.achievmentWala}>

            <View style={styles.innerContaint}>
              <Text style={styles.paragraph4}> *</Text>
              <Text style={styles.paragraph3}> 4 Star in C++</Text>
              <TouchableOpacity
              onPress={()=>OpenAnything.Web("https://www.hackerrank.com/h20146")}
              >
              <Text style={styles.paragraph5}> Click Here </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.innerContaint}>
              <Text style={styles.paragraph4}> *</Text>
              <Text style={styles.paragraph3}> snack Down 2021</Text>
              <TouchableOpacity
              onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1MlRbdt062lLnAkvcoXpiZEXSjORHEkYI/view?usp=sharing")}
              >
              <Text style={styles.paragraph5}> Click Here </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.innerContaint}>
              <Text style={styles.paragraph4}> *</Text>
              <Text style={styles.paragraph3}>Among Top 500 Coder</Text>
              <TouchableOpacity
              onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1fK6XFnkVA6hnlcBD4ArxaPPjX4gex0gr/view?usp=sharing")}
              >
              <Text style={styles.paragraph5}> Click Here </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.innerContaint}>
              <Text style={styles.paragraph4}> *</Text>
              <Text style={styles.paragraph3}> Guivi Certification for Python</Text>
              <TouchableOpacity
              onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/18utlASSgq_AvP7Lbxqb-VVb874Eg0CEX/view?usp=sharing")}
              >
              <Text style={styles.paragraph5}> Click Here </Text>
              </TouchableOpacity>
            </View>


          

            <View style={styles.innerContaint}>
              <Text style={styles.paragraph4}> *</Text>
              <Text style={styles.paragraph3}> Solved 500+ Question</Text>
            </View>



          </View>
      </View>



      <View styles={styles.content}>
        <View>
          <Text style={styles.heading}>Projects</Text>
          <View style={styles.innerContaint}>
          <Text style={styles.paragraph6}>1.</Text>
          <Text style={styles.paragraph6}>Clone of IIIT Una(Tech: React js)</Text>
          <TouchableOpacity
          onPress={()=>OpenAnything.Web("https://github.com/Priyanshusingh46/IIIT-UNA-")}
          >

          <Text style={styles.paragraph7}>Link</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>Join Google classroom in one Click</Text>
          </View>
          
          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>More than 200 Student Was Using It</Text>
          </View>

          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>Auto Join Feature useful During Covid</Text>
          </View>
            
          </View>
      </View>



      <View styles={styles.content}>
        <View>
          <View style={styles.innerContaint}>
          <Text style={styles.paragraph8}>2.</Text>
          <Text style={styles.paragraph8}>Bookish App(Tech: ReactNative)</Text>
          <TouchableOpacity
          onPress={()=>OpenAnything.Web("https://github.com/Priyanshusingh46/Bookish")}
          >

          <Text style={styles.paragraph12}>Link</Text>
          </TouchableOpacity>
          </View>


          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>Contain Book Of Class 6-12.</Text>
          </View>

          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>Stories Book And Question Bank.</Text>
          </View>
          
          <View style={styles.innerContaint}>
            <Text style={styles.paragraph10}>*</Text>
          <Text style={styles.paragraph11}>You can Read Online or Download it.</Text>
          </View>
            
          </View>
      </View>



          <View styles={styles.content}>
        <View>
          <Text style={styles.heading2}>Contacts</Text>
          <View style={styles.contact}>
            <TouchableOpacity
            onPress={()=>OpenAnything.Web("https://www.linkedin.com/in/priyanshusingh146/")}
            >
            <Image source={require('./Images/link.jpg')} style={styles.image1}/> 
            </TouchableOpacity>

            <TouchableOpacity
            onPress={trigger}
            >
            <Image source={require('./Images/call.png')} style={styles.image1}/> 
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>OpenAnything.Email(to = "priyanshuSingh1877@gmail.com", subject = "regarding contact", body = "Write your Concern", cc = "20146@iiitu.ac.in", bcc = false)}
            >
            <Image source={require('./Images/email.png')} style={styles.image1}/> 
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>OpenAnything.Web("https://github.com/Priyanshusingh46")}
            >
            <Image source={require('./Images/github.png')} style={styles.image1}/> 
            </TouchableOpacity>
          </View>
        </View>
      </View>



        


        </View>
      </View>

</ScrollView>
</View>
  );
}
const styles= StyleSheet.create({
  outercountainer:{
    flex:1,
    borderWidth:2,
    backgroundColor:"lightblue",
    marginBottom:18,
    marginLeft:12,
    marginRight:12,
    borderRadius:12,

  },
  image:{
    flex:1,
    width:180,
    height:150,
    marginTop:38,
    borderRadius:250,
    overflow:"hidden",
    justifyContent:"center",
    alignItems:"center"

  },
  image1:{
    flex:1,
    width:70,
    height:70,
    marginLeft:25,
    borderRadius:35,
    backgroundColor:"pink"
  },

  image2:{
    flex:1,
    width:5,
    height:80,
    marginLeft:25,
    borderRadius:40,
  },
  Location:{
    flex:1,
    marginBottom:18,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:25
  },
  contact:{
    flex:1,
    flexDirection:"row"
  },
  imageWala:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text1:{
    marginTop:10,
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  },
  heading:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:18,
    marginBottom:28,
    marginTop:18,
  },

  heading1:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:18,
    marginBottom:28,
    marginTop:40,
  },

  heading2:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:18,
    marginBottom:25,
    marginTop:30
  },

  heading3:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:18,
    marginBottom:25,
    marginTop:50
  },
  paragraph:{
    marginLeft:20,
    fontSize:18,
    flexWrap:"wrap"
  },
  paragraph11:{
    fontSize:18,
    flexWrap:"wrap",
    marginLeft:10
  },

  paragraph10:{
    marginLeft:50,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"bold"
  },

  paragraph16:{
    marginLeft:2,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"bold"
  },

  paragraph6:{
    marginLeft:20,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"600",
    marginBottom:12
  },

  paragraph8:{
    marginLeft:20,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"600",
    marginBottom:12,
    marginTop:12
  },

  paragraph12:{
    marginLeft:10,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"600",
    marginBottom:12,
    marginTop:12,
    color:"skyblue",
    textDecorationLine:"underline",
    fontWeight:"bold"
  },

  paragraph7:{
    marginLeft:10,
    fontSize:18,
    flexWrap:"wrap",
    fontWeight:"bold",
    textDecorationLine:"underline",
    color:"skyblue"
  },

  paragraph4:{
    marginLeft:20,
    fontSize:28,
    flexWrap:"wrap"
  },

  paragraph3:{
    marginLeft:15,
    fontSize:18,
    flexWrap:"wrap",
    marginRight:10
  },

  paragraph5:{
    fontSize:18,
    flexWrap:"wrap",
    color:"skyblue",
    textDecorationLine:'underline',
    fontWeight:"bold"

  },
  container:{
    flex:1,
    flexDirection:"row",
    marginTop:15
  },
  paragraph1:{
    marginLeft:20,
    fontSize:18,
    flexWrap:"wrap",
    backgroundColor:"#D9D9D9",
    width:105,
    height:25,
    textAlign:"center",

  },
  paragraph2:{
    marginLeft:10,
    fontSize:18,
    flexWrap:"wrap",
    width:105,
    height:25,
    textAlign:"center",

  },
  innerContaint:{
    flex:1,
    flexDirection:"row"
  },
  box:{
    marginTop:b,
    marginRight:5,
    marginBottom:5
  },
  newBox:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    marginBottom:5

  }
})