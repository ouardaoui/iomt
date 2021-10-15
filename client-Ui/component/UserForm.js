import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import features from '../data/Data';
const axios = require('axios');

const UserForm = () => {

  const { age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal } = features
  const [Sex, setSex] = useState(sex.feature);
  const [Cp, setCp] = useState(cp.feature);
  const [Exang, setExang] = useState(exang.feature);
  const [Slope, setSlope] = useState(slope.feature);
  const [Ca, setCa] = useState(ca.feature);
  const [Thal, setThal] = useState(thal.feature);
  const [Fbs, setFbs] = useState(fbs.feature);
  const [Restecg, setRestecg] = useState(restecg.feature)
  const [data, setData] = useState({
    "age": "",
    "sex": "",
    "cp": "",
    "trestbps": "",
    "chol": "",
    "fbs": "",
    "restecg": "",
    "thalach": "",
    "exang": "",
    "oldpeak": "",
    "slope": "",
    "ca": "",
    "thal": "",
  })
  const handlechange = (id, name) => {
    setData({ ...data, [name]: id })
  }
  const pressHandler = (id, name) => {


    // setData((prevState)=>{
    //     return prevState.filter(feature => feature.id == id)
    // })
    switch (name) {
      case "cp":
        setCp((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "sex":
        setSex((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "exang":
        setExang((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "slope":
        setSlope((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "ca":
        setCa((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "thal":
        setThal((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "fbs":
        setFbs((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
      case "restecg":
        setRestecg((prevPeople) => {
          return prevPeople.filter(feature => feature.id == id);
        })
        break;
    }


  };
  useEffect(() => {
    setData({
      ...data, "sex": Sex[0].value, "cp": Cp[0].value, "fbs": Fbs[0].value, "restecg": Restecg[0].value,
      "exang": Exang[0].value,
      "slope": Slope[0].value,
      "ca": Ca[0].value,
      "thal": Thal[0].value
    })
  }, [Thal])
  const handlepress = () => {



    axios.post("https://banked-iomt.herokuapp.com", {
      age: data.age,
      sex: data.sex,
      cp: data.cp,
      trestbps: data.trestbps,
      chol: data.chol,
      fbs: data.fbs,
      restecg: data.restecg,
      thalach: data.thalach,
      exang: data.exang,
      oldpeak: data.oldpeak,
      slope: data.slope,
      ca: data.ca,
      thal: data.thal,
    })
      .then(function (response) {
        alert(response.data.prediction);
      }, [])
      .catch(function (error) {
        console.log(error);
      });

  }
  console.log(data)



  return (
    <ScrollView style={styles.container}  >


      <Text style={styles.form} >Medical form</Text>

      <View style={styles.inputGroup} >
        <Text style={styles.title} >{age.title}</Text>
        <Text style={styles.text} >{age.subtitle}</Text>
        <TextInput

          style={styles.input}
          onChangeText={(value) => handlechange(value, "age")}
          value={data.age}
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{sex.title}</Text>
        <Text style={styles.text} >{sex.subtitle}</Text>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={Sex}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => pressHandler(item.id, "sex")}>
              <Text style={styles.buttonselect} >{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title}>{cp.title}</Text>
        <Text style={styles.text}>{cp.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          key={4}
          keyExtractor={(item) => item.id}
          data={Cp}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "cp")}>
              <Text style={styles.buttonselect} >{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{trestbps.title}</Text>
        <Text style={styles.text}>{trestbps.subtitle}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handlechange(value, "trestbps")}
          value={data.trestbps}
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{chol.title}</Text>
        <Text style={styles.text} >{chol.subtitle}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handlechange(value, "chol")}
          value={data.chol}
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{fbs.title}</Text>
        <Text style={styles.text} >{fbs.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={Fbs}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => pressHandler(item.id, "fbs")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>

      <View style={styles.inputGroup} >
        <Text style={styles.title} >{restecg.title}</Text>
        <Text style={styles.text} >{restecg.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          key={3}
          keyExtractor={(item) => item.id}
          data={Restecg}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "restecg")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>

      <View style={styles.inputGroup} >
        <Text style={styles.title} >{thalach.title}</Text>
        <Text style={styles.text} >{thalach.subtitle}</Text>
        <TextInput

          style={styles.input}
          onChangeText={(value) => handlechange(value, "thalach")}
          value={data.thalach}
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{exang.title}</Text>
        <Text style={styles.text} >{exang.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={Exang}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "exang")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{oldpeak.title}</Text>
        <Text style={styles.text} >{oldpeak.subtitle}</Text>
        <TextInput

          style={styles.input}
          onChangeText={(value) => handlechange(value, "oldpeak")}
          value={data.oldpeak}
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{slope.title}</Text>
        <Text style={styles.text} >{slope.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          key={3}
          keyExtractor={(item) => item.id}
          data={Slope}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "slope")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
      <View style={styles.inputGroup} >
        <Text style={styles.title} >{ca.title}</Text>
        <Text style={styles.text}>{ca.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          key={2}
          keyExtractor={(item) => item.id}
          data={Ca}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "ca")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.title} >{thal.title}</Text>
        <Text style={styles.text}>{thal.subtitle}</Text>
        <FlatList
          style={styles.container}
          numColumns={2}
          key={3}
          keyExtractor={(item) => item.id}
          data={Thal}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id, "thal")}>
              <Text style={styles.buttonselect}>{item.type}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>

      <View style={styles.inputGroup} >
        <Button
          style={styles.buttonselect}
          title="Save User" onPress={handlepress} />
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  form: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 40,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    //   fontSize : 10,
    //   marginBottom : 10
  },
  inputGroup: {
    flex: 1,
    padding: 20,
    marginVertical: 20,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    marginTop: 40,
    backgroundColor: '#F5FCFF',
    // color :"#d1e8d6",   
    //   flex: 1,
    //   padding: 35,
  },
  loader: {
    //   left: 0,
    //   right: 0,
    //   top: 0,
    //   bottom: 0,
    //   position: "absolute",
    //   alignItems: "center",
    //   justifyContent: "center",
  },

  buttonselect: {
    width: 150,
    margin: 10,
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 50,
  }, image: {
    flex: 1,
    justifyContent: "center"
  },
});
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 40,
//       paddingHorizontal: 20,
//       backgroundColor: '#fff',
//     },
//     item: {
//       flex: 1,
//       marginHorizontal: 10,
//       marginTop: 24,
//       padding: 30,
//       backgroundColor: 'pink',
//       fontSize: 24,
//     },
//   });
export default UserForm;