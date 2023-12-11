import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Modal,
  Image,
  TextInput,
  useColorScheme
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // expo install expo-font expo-splash-screen
import { useFonts } from 'expo-font';//a
import AsyncStorage from '@react-native-async-storage/async-storage'; //npm i @react-native-async-storage/async-storage
import { MaterialCommunityIcons, Feather, Entypo, FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av'; // npx expo install expo-av
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, query, orderByChild, onValue, orderByValue, startAt, DataSnapshot } from "firebase/database";
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import { Table, Row, Rows } from 'react-native-table-component';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


/*const firebaseConfig = {
  apiKey: "AIzaSyAJu3P0jSXgI7N73b1U8oYUo3i0UBvGEmE",
  authDomain: "slime-1527b.firebaseapp.com",
  projectId: "slime-1527b",
  storageBucket: "slime-1527b .appspot.com",
  messagingSenderId: "318430609608",
  appId: "1:318430609608:web:37f13d7a8213fd967e65fd",
  measurementId: "G-C33XHQEEBX"
};
const app = initializeApp(firebaseConfig);*/

const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://slime-1527b-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

/*function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
writeUserData('a','bam','gmail','ssksk');*/

function writeUserData(name, presti, rickro) {
  const db = getDatabase();
  set(ref(db, 'users/' + name), {
    username: name,
    prestige: presti,
    rickroll: rickro
  });
}
//writeUserData('Ham',10)
//writeUserData('Hame','8');

/*const a = async(userId) => {
  let n;
  const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    n = (snapshot.val());
  } else {
    n = "No data available";
  }
}).catch((error) => {
  console.error(error);
})
return 'aasd';
}

const b = async(userId) => {
  let n;
  const dbRef = ref(getDatabase());

  try {
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
      n = snapshot.val();
    } else {
      n = "No data available";
    }
    return n;
  } catch (error) {
    console.error(error);
  }
};
//console.log(b('Hae'));
function vbn(userf) {
b(userf).then((result) => {
  console.log(result); // Виведе значення знайденого запису або рядок "No data available".
  rtyuiop = result;
  //console.log(rtyuiop+'aaas')
  log();
})
//console.log(rtyuiop+'aaa')
}*/
/*const znak = (n,cho) => {
  //return 'a';
  let m;
const db = getDatabase();
const starCountRef = ref(db, 'users');
onValue(starCountRef, (snapshot) => {
  //return 'a';
  const data = snapshot.val();
//console.log((data[Object.keys(data)[n]][cho]))
  //console.log(data)
  //console.log(typeof(data))
  //console.log(data['prestige'])
  //m = (data[Object.keys(data)[n]][cho]);
  if ((data[Object.keys(data)[n]])!=undefined) {
    //console.log(typeof(data));
    m = (data[Object.keys(data)[n]][cho]);
    //console.log(m);
  }
  else {
    m='';
  }
  //console.log(m);
  //console.log(typeof(m));
  //return 5;
  //return m;
  //return (data[Object.keys(data)[n]][cho]);
  //let b = (data[Object.keys(data)[0]])
  //console.log(b['prestige'])
  //return m;
});
return m;
}
const znak4 = (n,cho) => {
  let m;
const db = getDatabase();
const starCountRef = query(ref(db, 'users'), orderByChild("prestige"));
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  //console.log(data);
  if ((data[Object.keys(data)[n]])!=undefined) {
    m = (data[Object.keys(data)[n]][cho]);
  }
  else {
    m='';
  }
});
return m;
}*/
/*const znak5 = (n, cho) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    //const starCountRef = query(ref(db, 'users'), orderByChild('prestige'), startAt(2));
    const starCountRef = query(ref(db, 'users'), orderByChild('prestige'));
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      console.log(data)
      let x;
      //console.log(Object.keys(data).reverse())
      x = Object.keys(data).reverse()
  //console.log(data[Object.keys(data)[n]].reverse())
      let m;
      if (data[x[n]] !== undefined) {
        m = data[x[n]][cho];
      } else {
        m = '';
      }
      resolve(m);
    }, (error) => {
      reject(error);
    });
  });
};*/
const znak6 = (n, cho) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    //const starCountRef = query(ref(db, 'users'), orderByChild('prestige'), startAt(2));
    const starCountRef = query(ref(db, 'users'), orderByChild('prestige'));
    onValue(starCountRef, (snapshot) => {
      let aboba = [];

      snapshot.forEach(childSnapshot =>{
        aboba.push(childSnapshot.val());
      })

      
      //console.log(aboba)
      aboba.reverse();
      //console.log(aboba)
      //let x;
      //console.log(Object.keys(data).reverse())
      //x = Object.keys(aboba).reverse()
  //console.log(data[Object.keys(data)[n]].reverse())
      let m;
      //console.log(aboba[0][cho]+'AAA')
      //console.log(x);
      if (aboba[n] !== undefined) {
        m = aboba[n][cho];
      } else {
        m = '';
      }
      resolve(m);
    }, (error) => {
      reject(error);
    });
  });
};
//znak4(2,'username');
//console.log((znak5(0,'username')['_z']));
//console.log((znak6(10,'username')['_z']));
//setTimeout( () => {
//  console.log(znak(0,'username'));
//console.log(znak(3,'username'));
//}, 3000);
//console.log(znak(0,'username'));
//console.log(znak(3,'username'));
//console.log(v)
//console.log(typeof(v))
//const db = getDatabase();
//const mostViewedPosts = query(ref(db, 'users'), orderByKey('2/'));
//console.log(mostViewedPosts)
/*
const porad = () => {
  const db = getDatabase();
  //const mostViewedPosts = query(ref(db, 'users'), orderByChild('Hame/prestige'));
  //console.log(mostViewedPosts)

  //const ref = ref(db, 'users');

  //ref.orderByChild('prestige').on('child_added', (snapshot) => {
  //console.log(snapshot.key + ' was ' + snapshot.val().prestige + ' meters tall');

  //const scoresRef = db.ref('users');
  //const scoresRef = ref(db, 'users');
//scoresRef.orderByValue().on('value', (snapshot) => {
  //snapshot.forEach((data) => {
  //  console.log('The ' + data.key + ' dinosaur\'s score is ' + data.val());
 // });
//});
//});
const que = query(ref(db,'users'),orderByChild("prestige"));
//console.log(que);
get(que)
.then((snapshot)=>{
  var users = [];
  
  snapshot.forEach(childSnapshot =>{
    users.push(childSnapshot.val());
  })
  users.reverse();
  //console.log(users);
})

}
//console.log(porad());
*/
/*const znak1 = (n,cho) => {
  //let m;
  let users;
  const db = getDatabase();
  const que = query(ref(db,'users'),orderByChild("prestige"));

get(que)
.then((snapshot)=>{
  users = [];
  
  snapshot.forEach(childSnapshot =>{
    users.push(childSnapshot.val());
  })
  users.reverse();
  //console.log(users);
  if ((users[Object.keys(users)[n]])!=undefined) {
    return (users[Object.keys(users)[n]][cho]);
  }
  else {
    return '';
  }
})
}*/
//const znak = (n,cho) => {
//  return n+cho;
//}
/*const znak1 = async(n, cho) => {
  let users;
  const db = getDatabase();
  const que = query(ref(db,'users'), orderByChild("prestige"));

    get(que)
    .then((snapshot) => {
      users = [];

      snapshot.forEach((childSnapshot) => {
        users.push(childSnapshot.val());
      });
      users.reverse();

      if (users[Object.keys(users)[n]] != undefined) {
        return users[Object.keys(users)[n]][cho];
      } else {
        return '';
      }
    });
};*/
/*let x;
const znak1 = async(n, cho) => {
  return 'a'
  let users;
  const db = getDatabase();
  const que = query(ref(db,'users'), orderByChild("prestige"));

  const snapshot = await get(que);
  users = [];

  snapshot.forEach((childSnapshot) => {
    users.push(childSnapshot.val());
  });
  users.reverse();

  if (users[Object.keys(users)[n]] != undefined) {
    //return users[Object.keys(users)[n]][cho];
  } else {
    x='';
    //return '';
  }
};*/
/*
const doc = await ref.get();

if (!doc.exists) {
  console.log('Not exists');
} else {
  console.log('data', doc.data())
}
*/
//console.log(znak1(0,'prestige'));
const znak63 = (n, cho) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    //const starCountRef = query(ref(db, 'users'), orderByChild('prestige'), startAt(2));
    const starCountRef = query(ref(db, 'users'));
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      updateStarCount(postElement, data);
    }, (error) => {
      reject(error);
    });
  });
};
const supper = (userr) => {
  database()
  .ref('/users/userrr')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
}
const znak62 = (n, cho) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    //const starCountRef = query(ref(db, 'users'), orderByChild('prestige'), startAt(2));
    const starCountRef = query(ref(db, 'users'));
    onValue(starCountRef, (snapshot) => {
      let aboba = [];
      //console.log(DataSnapshot)
      console.log(typeof(snapshot))
      console.log(snapshot)

      snapshot.forEach(childSnapshot =>{
        aboba.push(childSnapshot.val());
      })

      
      //console.log(aboba)
      aboba.reverse();
      //console.log(aboba)
      //let x;
      //console.log(Object.keys(data).reverse())
      //x = Object.keys(aboba).reverse()
  //console.log(data[Object.keys(data)[n]].reverse())
      let m;
      //console.log(aboba[0][cho]+'AAA')
      //console.log(x);
      if (aboba[n] !== undefined) {
        m = aboba[n][cho];
      } else {
        m = '';
      }
      resolve(m);
    }, (error) => {
      reject(error);
    });
  });
};


const znak622 = async() => {
  user = await AsyncStorage.getItem('user');
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const starCountRef = query(ref(db, 'users'));

    // Використовуйте get(), щоб отримати дані один раз
    get(starCountRef).then((snapshot) => {
      // Перевірте, чи є дані в знімку
      if (snapshot.exists()) {
        // Отримайте дані, використовуючи snapshot.val()
        const data = snapshot.val();
        
        //console.log(user)
        const an = data[user]
        //console.log(an['rickroll'])
        banan = an["rickroll"]
        vid = banan
        return an['rickroll']
        console.log(typeof(an))
        console.log(data[user]);
        resolve(data[user]);
      } else {
        console.log('Дані недоступні');
        resolve(null);
      }
    }).catch((error) => {
      console.error('Помилка отримання даних:', error);
      reject(error);
    });
  });
  
};

let money;
let banan;
let strange;
let price;
let prestige;
let prestigePrice;
let status1;
let status2;
let status3;
let mnog;
let passive;
let passivePrice;
let vid;
let crit;
let critPrice;
//let x;
let y = 60;
let block;
let disabl = true;
let user;
let tyu = '';
let rtyuiop;
//console.log('a')
//AsyncStorage.removeItem('monyy');
//AsyncStorage.removeItem('grn');
//AsyncStorage.removeItem('syla');
//AsyncStorage.removeItem('prestig');
//AsyncStorage.removeItem('pp');
//AsyncStorage.removeItem('stat');
const abobas = async () => {
  //console.log(money+'A')
  if ((await AsyncStorage.getItem('monyy')) == null) {
    money = 0;
    strange =1;
    price = 10;
    prestige = 1;
    prestigePrice = 5000000;
    status1 =false;
    status2 = false;
    status3 = true;
    mnog = 1;
    passive =0;
    passivePrice = 50;
    vid = '1';
    crit = 1;
    critPrice = '60';
    block = 'false';
    passive = passive.toString();
    passivePrice = passivePrice.toString();
    status1 = status1.toString();
    status2 = status2.toString();
    status3 = status3.toString();
    money = money.toString();
    strange = strange.toString();
    price = price.toString();
    prestige = prestige.toString();
    prestigePrice = prestigePrice.toString();
    mnog = mnog.toString();
    crit = crit.toString();
    //console.log(money+'C')
    AsyncStorage.setItem('passive', passive);
    AsyncStorage.setItem('passivePrice', passivePrice);
    AsyncStorage.setItem('prestig',prestige);
    AsyncStorage.setItem('monyy', money);
    AsyncStorage.setItem('syla', strange);
    AsyncStorage.setItem('grn', price);
    AsyncStorage.setItem('pp', prestigePrice);
    AsyncStorage.setItem('stat',status1);
    AsyncStorage.setItem('stat2',status2);
    AsyncStorage.setItem('stat3',status3);
    AsyncStorage.setItem('mnog',mnog);
    AsyncStorage.setItem('vid',vid);
    AsyncStorage.setItem('crit',crit);
    AsyncStorage.setItem('critPrice',critPrice);
    AsyncStorage.setItem('block',block);
    //console.log('a');
  }
  money = await AsyncStorage.getItem('monyy');
  //console.log(money+'B')
  strange = await AsyncStorage.getItem('syla');
  price = await AsyncStorage.getItem('grn');
  prestige = await AsyncStorage.getItem('prestig');
  prestigePrice = await AsyncStorage.getItem('pp');
  status1 = (await AsyncStorage.getItem('stat')) == 'true' ? true : false;
  status2 = (await AsyncStorage.getItem('stat2')) == 'true' ? true : false;
  status3 = (await AsyncStorage.getItem('stat3')) == 'true' ? true : false;
  block = (await AsyncStorage.getItem('block')) == 'true' ? true : false;
  //console.log(status);
  //console.log(typeof status);
  vid = await AsyncStorage.getItem('vid'); 
  mnog = await AsyncStorage.getItem('mnog');
  passive = await AsyncStorage.getItem('passive');
  passivePrice = await AsyncStorage.getItem('passivePrice');
  crit = await AsyncStorage.getItem('crit');
  critPrice = await AsyncStorage.getItem('critPrice');
}
abobas();
//console.log(money+'D');


function abbrNum(number) {
  // 2 decimal places => 100, 3 => 1000, etc
  let decPlaces = 100;

  // Enumerate number abbreviations
  let abbrev = ["k", "m", "b", "t"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    let size = Math.pow(10, (i + 1) * 3);
    //console.log(size);
    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.floor(number / size * 10) / 10;
      //number = (number*2/size)/2;

      // Handle special case where we round up to the next abbreviation
      if ((number == 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      // We are done... stop
      break;
    }
  }

  return number;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1) + min); // The maximum is exclusive and the minimum is inclusive
}

function tex (ban,viv) {
  if (ban<100) {
    return viv;
  }
  else {
    return 'max';
  }
}

function tex2 (r) {
  if (r!='max') {
    return '$'+r;
  }
  else {
    return 'max';
  }
}

function tex3(ex1,ex2) {
  if (ex1==false) {
    return ex2;
  }
  else {
    return 'sold';
  }
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [count, setCount] = useState(parseInt(money));
  const [count1, setCount1] = useState(parseInt(strange));
  const [count2, setCount2] = useState(parseInt(price));
  const [count3, setCount3] = useState(parseInt(prestige));
  const [count4, setCount4] = useState(parseInt(prestigePrice));
  const [count5, setCount5] = useState(parseInt(passive));
  const [count6, setCount6] = useState(parseInt(passivePrice));
  const [count7, setCount7] = useState(parseFloat(crit));
  const [count8, setCount8] = useState(parseInt(critPrice));
  const [count9, setCount9] = useState(y);
  const [shouldShow, setShouldShow] = useState((status1== 'true' ? true : false));
  const [shouldShow2, setShouldShow2] = useState((status2== 'true' ? true : false))
  const [shouldShow3, setShouldShow3] = useState((status3== 'true' ? true : false));
  const [shouldShow4, setShouldShow4] = useState(false);
  const [status, setStatus] = useState({});
  const [shouldShow1, setShouldShow1] = useState(false);
  const video = useRef();
  const [text, onChangeText] = useState('');
  const [fontsLoaded] = useFonts({
    'PressStart2P-regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });
  useEffect(() => {
    let secTimer = setInterval( async() => {
      money =parseInt(money) +parseInt(passive)*parseInt(mnog);
    setCount(money);
    if (parseInt(crit)>=parseInt(getRandomInt(1,100))) {
      money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*10;
      setCount(money);
    }
    //setShouldShow(status);
    money = money.toString();
    await AsyncStorage.setItem('monyy', money);
    },3000)
  
    return () => clearInterval(secTimer);
}, []);
useEffect(() => {
  let secTimer = setInterval( async() => {
    if (y>0) {
     // money =parseInt(money) +parseInt(passive)*parseInt(mnog);
    //setCount(money);
    //setShouldShow(status);
    //money = money.toString();
    //await AsyncStorage.setItem('monyy', money);
    //console.log(y);
    y=y-1;
  setCount9(y);}
    else {
      disabl = false;
      y='ready';
      setCount9(y);
    }
    },1000)
    //disabl = false;
    return () => clearInterval(secTimer);//}
}, []);
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  if (!fontsLoaded) {
    return undefined;
  }
  else {
//setShouldShow(status);
setTimeout(async() => {
  setCount(money);
  setShouldShow((await AsyncStorage.getItem('stat')) == 'true' ? true : false);
  setShouldShow2((await AsyncStorage.getItem('stat2')) == 'true' ? true : false);
  setShouldShow3((await AsyncStorage.getItem('stat3')) == 'true' ? true : false);
  //console.log('c');
  SplashScreen.hideAsync();
}, 3000);
    //SplashScreen.hideAsync();  
  } 

  const press = () => {
    setModalVisible(!modalVisible);
    setModalVisible1(false);
    setModalVisible2(false);
  }
  const press1 = () => {
    //console.log('a');
    //console.log(modalVisible1);
    //console.log(typeof(modalVisible1));
    setModalVisible1(!modalVisible1);
    //console.log('b');
    setModalVisible(false);
    setModalVisible2(false);
  }
  const press2 = () => {
    setModalVisible2(!modalVisible2);
    setModalVisible(false);
    setModalVisible1(false);
  }
  const pressHandler = async () => {
    money =parseInt(money) + (parseInt(strange))*parseInt(mnog);
    setCount(money);
    znak622();
    //console.log(znak62(0,'prestige'))
    //console.log(user)
    //const sjfs = znak622()
    //console.log(typeof(sjfs))
    //console.log(banan)
    //vid = banan
    //console.log(sjfs)
    //console.log(sjfs[3]+'a')
    //console.log(znak622())
    //x = 100-parseInt(crit);
    //console.log(x);
    //console.log(getRandomInt(0, x));
    /*if (1==parseInt(getRandomInt(1,x))) {
      money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*10;
      setCount(money);
    }*/
    if (parseInt(crit)>=parseInt(getRandomInt(1,100))) {
      money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*10;
      setCount(money);
    }
    if (vid=='1') {
      if (parseInt(money)>=100) {
        //console.log('ab');
        setShouldShow1(true);
        setTimeout( () => {
          setShouldShow1(false);
        }, 7500); 
        vid = '2';
        writeUserData(user,parseInt(prestige),vid);
        AsyncStorage.setItem('vid',vid);

      }
    }
    //setShouldShow(status);
    money = money.toString();
    await AsyncStorage.setItem('monyy', money);

  }
  const plata = async () => {
    if (parseInt(money) >= parseInt(price)) {
      money = parseInt(money) - parseInt(price);
      strange = parseInt(strange) + parseInt(prestige);
      price = parseInt(price);
      price = price + Math.round((price / 100) * 5);

      setCount(money);
      setCount1(strange);
      setCount2(price);
      setCount3(prestige);

      money = money.toString();
      strange = strange.toString();
      price = price.toString();
      prestige = prestige.toString();
      await AsyncStorage.setItem('prestig',prestige);
      await AsyncStorage.setItem('monyy', money);
      await AsyncStorage.setItem('syla', strange);
      await AsyncStorage.setItem('grn', price);
    }
  }

  const prest = async () => {
    //setShouldShow(!shouldShow);
    //status =(!shouldShow);
    //status = status.toString();
    //AsyncStorage.setItem('stat',status);
    //status = (await AsyncStorage.getItem('stat')) == 'true' ? true : false; acces

    prestige = parseInt(prestige);
    prestigePrice = parseInt(prestigePrice);
    money = parseInt(money);
    if (money>=prestigePrice) {
      prestige++;
      switch(prestigePrice) {
        case 5000000:
          prestigePrice=10000000;
          break;
        case 10000000:
          prestigePrice=20000000;
          break;
        case 20000000:
          prestigePrice=30000000;
          break;
        case 30000000:
          prestigePrice=50000000;
          break;
        default:
          prestigePrice= prestigePrice+50000000;
          break;
      }
      money=0;
      strange=parseInt(prestige);
      price=10;
      status1 = false;
      status2 = false;
      mnog=1;
      passive =0;
      passivePrice = 50;
      crit =1;
      critPrice = '60';
      block = 'false';
      y='';
      disabl = false;
      user = await AsyncStorage.getItem('user');
      writeUserData(user,parseInt(prestige),vid);
      
      setCount(money);
      setCount1(strange);
      setCount2(price);
      setCount3(prestige);
      setCount4(prestigePrice);
      setCount5(passive);
      setCount6(passivePrice);
      setCount7(crit);
      setCount8(critPrice);
      setCount9(y);

      setShouldShow(false);
      setShouldShow2(false);
      //console.log(shouldShow+'A');
      //console.log(typeof(shouldShow)+'A');
      passive = passive.toString();
      passivePrice = passivePrice.toString();
      prestigePrice = prestigePrice.toString();
      money = money.toString();
      strange = strange.toString();
      price = price.toString();
      prestige = prestige.toString();
      status1 = status1.toString();
      status2 = status2.toString();
      mnog = mnog.toString();
      crit = crit.toString();
      await AsyncStorage.setItem('prestig',prestige);
      await AsyncStorage.setItem('monyy', money);
      await AsyncStorage.setItem('syla', strange);
      await AsyncStorage.setItem('grn', price);
      await AsyncStorage.setItem('pp',prestigePrice);
      await AsyncStorage.setItem('stat',status1);
      await AsyncStorage.setItem('stat2',status2);
      await AsyncStorage.setItem('mnog',mnog);
      await AsyncStorage.setItem('passive',passive);
      await AsyncStorage.setItem('passivePrice', passivePrice);
      await AsyncStorage.setItem('crit',crit);
      await AsyncStorage.setItem('critPrice',critPrice);
      await AsyncStorage.setItem('block',block);
      //console.log(setShouldShow+'B');
      //console.log(shouldShow+'B');
      //console.log(typeof(shouldShow)+'B');
    }
  }
  const plata2 = async () => {
    if (parseInt(money) >= parseInt(passivePrice)) {
      money = parseInt(money) - parseInt(passivePrice);
      passive = parseInt(passive)+parseInt(prestige);
      passivePrice = parseInt(passivePrice);
      passivePrice = passivePrice + Math.round((passivePrice / 100) * 2);

      setCount(money);
      setCount5(passive);
      setCount6(passivePrice);

      money = money.toString();
      passive = passive.toString();
      passivePrice = passivePrice.toString();
      //prestige = prestige.toString();
      await AsyncStorage.setItem('passive',passive);
      await AsyncStorage.setItem('monyy', money);
      await AsyncStorage.setItem('passivePrice', passivePrice);
      
    }
  }
  const plata3 = async () => {
    if (parseInt(crit)<100){
    if (parseInt(money) >= parseInt(critPrice)) {
      money = parseInt(money) - parseInt(critPrice);
      crit = parseInt(crit)+1;
      passivePrice = parseInt(passivePrice);
      critPrice = parseInt(critPrice);
      critPrice = critPrice + Math.round((critPrice/100)*12);

      setCount(money);
      setCount7(crit);
      setCount8(critPrice);
      

      money = money.toString();
      passive = passive.toString();
      crit = crit.toString();
      critPrice = critPrice.toString();
      passivePrice = passivePrice.toString();
      //prestige = prestige.toString();
      await AsyncStorage.setItem('crit',crit);
      await AsyncStorage.setItem('monyy', money);
      await AsyncStorage.setItem('critPrice', critPrice);
      
    }
  }
  else {
    //block = (await AsyncStorage.getItem('block')) == 'true' ? true : false;
    block = 'true';
    AsyncStorage.setItem('block',block);
  }
  }
  const kno = async() => {
    y =60;
    disabl = true;
    money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*10;
    setCount(money);
   // x = 100-parseInt(crit);
    //console.log(x);
    //console.log(getRandomInt(0, x));
    //if (1==parseInt(getRandomInt(1,x))) {
    //  money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*100;
    //  setCount(money);
   // }
   if (parseInt(crit)>=parseInt(getRandomInt(1,100))) {
    money =parseInt(money) + (parseInt(strange))*parseInt(mnog)*10;
    setCount(money);
  }
    money = money.toString();
    await AsyncStorage.setItem('monyy', money);

  }

const change = async () => {
  if (parseInt(money) >= 500000){
    money = parseInt(money)-500000;
    mnog = 2;
    setCount(money);
    setShouldShow(!shouldShow);
    status1 =(!shouldShow);
    status1 = status1.toString();
    money = money.toString(); 
    mnog = mnog.toString();
    await AsyncStorage.setItem('mnog',mnog);
    await AsyncStorage.setItem('monyy', money);
    await AsyncStorage.setItem('stat',status1);
    status1 = (await AsyncStorage.getItem('stat')) == 'true' ? true : false;
    //console.log(shouldShow);
  }
}

const change2 = async () => {
  if (parseInt(money) >= 1000000){
    y='ready';
    disabl = false;
    money = parseInt(money)-1000000;
    //mnog = 2;
    setCount(money);
    setShouldShow2(!shouldShow2);
    status2 =(!shouldShow2);
    status2 = status2.toString();
    money = money.toString(); 
    //mnog = mnog.toString();
    //await AsyncStorage.setItem('mnog',mnog);
    await AsyncStorage.setItem('monyy', money);
    await AsyncStorage.setItem('stat2',status2);
    status2 = (await AsyncStorage.getItem('stat2')) == 'true' ? true : false;
    //console.log(shouldShow);
  }
}

const lader = () => {
  setShouldShow4(!shouldShow4);
}

const log = async() => {
  //console.log(text.includes('#'))
  if (text==''||text.includes('#')==true||text.includes('.')==true||text.includes('$')==true||text.includes('[')==true||text.includes(']')==true) {
//console.log('ok');
  }
  else {
  //console.log(text);
  //console.log(a(text))
  if (rtyuiop=="No data available") {
  user = text;
  setShouldShow3(false);
  status3 = 'false';
  writeUserData(user,parseInt(prestige),vid);
  AsyncStorage.setItem('user',user);
  AsyncStorage.setItem('stat3',status3);
  }
  else {
    tyu = 'Це ім\'я уже використовується';
    setTimeout( () => {
      tyu='';
    }, 3000);
        //SplashScreen.hideAsync();  
      } 
  }
  }

  const b = async(userId) => {
    let n;
    const dbRef = ref(getDatabase());
  
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        n = snapshot.val();
      } else {
        n = "No data available";
      }
      return n;
    } catch (error) {
      console.error(error);
    }
  };
  //console.log(b('Hae'));
  function vbn() {
  b(text).then((result) => {
    //console.log(result); // Виведе значення знайденого запису або рядок "No data available".
    rtyuiop = result;
    //console.log(rtyuiop+'aaas')
    log();
  })
  //console.log(rtyuiop+'aaa')
  }
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#709ad1',
      position: 'relative',
    }}>

      <Text style={{

        top: '7%',
        left: '6%',
        color: 'white',
        fontFamily: 'PressStart2P-regular'
      }}>Money:{abbrNum(money)}</Text>
      <TouchableOpacity onPress={lader} style={{
        alignSelf:'flex-end',
        //backgroundColor:'#709ad1',
        width:60,
        height:60,
        top:8,
        right:8,
        borderRadius:10,
        backgroundColor: '#7a95a7',
        //borderColor: '#5e788c', 
        //borderWidth: 3,
      }}>
        <MaterialIcons name="leaderboard" size={60} color="white" />
      </TouchableOpacity>
      <Modal
              visible={shouldShow4}
              onRequestClose={() => {
                setShouldShow4(!shouldShow4)
              }}> 
          <View style={{
            width:'100%',
            height:'100%',
            backgroundColor: '#709ad1',
            //justifyContent:''
          }}>
            <TouchableOpacity onPress={lader} style={{
            alignSelf:'flex-end',
            backgroundColor:'#709ad1',
            width:60,
            height:60,
            top:8,
            right:8,
            borderRadius:10,
            backgroundColor: '#709ad1',
            }}>
             <Image
                  source={require('./ima/cancel3.png')} style={{height:50, width:50}}>
                </Image>
            </TouchableOpacity>
            <View style={{
              width:'50%',
              height:'90%',
              top:'10%',
              backgroundColor:'#709ad1',
              position:'absolute'
            }}>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>Username</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 1.{(znak6(0,'username')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 2.{(znak6(1,'username')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 3.{(znak6(2,'username')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 4.{(znak6(3,'username')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 5.{(znak6(4,'username')['_z'])}</Text>
               <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 6.{(znak6(5,'username')['_z'])}</Text>
               <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 7.{(znak6(6,'username')['_z'])}</Text>
               <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 8.{(znak6(7,'username')['_z'])}</Text>
               <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 9.{(znak6(8,'username')['_z'])}</Text>
               <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'flex-start',
              }}> 10.{(znak6(9,'username')['_z'])}</Text>
            </View>
            <View style={{
              width:'50%',
              left:'50%',
              height:'90%',
              top:'10%',
              backgroundColor:'#709ad1',
              position:'absolute'
            }}>
                            <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>Prestige</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(0,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(1,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(2,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(3,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(4,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(5,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(6,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(7,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(8,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(9,'prestige')['_z'])}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'PressStart2P-regular',
                alignSelf:'center',
              }}>{(znak6(10,'prestige')['_z'])}</Text>
</View>
          </View>
          </Modal>
      <Modal
              visible={shouldShow3}
              onRequestClose={() => {
                setShouldShow3(!shouldShow3)
              }}> 
          <View style={{
            width:'100%',
            height:'100%',
            backgroundColor:'#709ad1',
            justifyContent:'center'
          }}>
            <TextInput placeholder='Enter username'
            maxLength={10}
            onChangeText={onChangeText}
            style={{
              width:'80%',
              left:'10%',
              height:50,
              backgroundColor:'white',
              borderRadius:10,
              //backgroundColor: '#7a95a7', #5e788c
              borderColor: '#7a95a7', 
              borderWidth: 2,
              //height: 40,
              //margin: 12,
              //borderWidth: 1,
              padding: 10,
            }} />
            <TouchableOpacity onPress={vbn} style={{
              width:'40%',
              height:'6%',
              left:'30%',
              top:'25%',
              borderRadius:10,
              backgroundColor: '#7a95a7',
              borderColor: '#5e788c', 
              borderWidth: 3,
              justifyContent:'center'
            }}>
              <Text style={{
              color: 'white',
              fontFamily: 'PressStart2P-regular',
              alignSelf:'center',
            }}>OK</Text>
            </TouchableOpacity>
            <Text style={{
              color: 'white',
              fontFamily: 'PressStart2P-regular',
              alignSelf:'center'}}>
                тут немає бути . # $ [ ] 
            </Text>
            <Text style={{
              color: 'white',
              fontFamily: 'PressStart2P-regular',
              alignSelf:'center'}}>{tyu}</Text>
          </View>
          </Modal>
         {shouldShow ? (
       
        <TouchableOpacity style={{height: 187,
          width: 272,
          backgroundColor: '#DDDDDD',
          borderRadius: 10,
          top: '35%',
          
          position: 'absolute',
          alignSelf:'center'
      }} onPress={pressHandler} activeOpacity={1}>
      
                <Image
                  source={require('./ima/bls.png')} backgroundColor='#709ad1'>
                </Image>
      
              </TouchableOpacity>
         ) :
        
<TouchableOpacity style={{height: 160,
    width: 280,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    top: '35%',
    alignSelf:'center',
    position: 'absolute'
}} onPress={pressHandler} activeOpacity={1}>

          <Image
            source={require('./ima/slimee.png')} backgroundColor='#709ad1'>
          </Image>

        </TouchableOpacity>

         }
          {shouldShow1 ? (
          
          <Video source={require('./ima/important.mp4')} 
          ref={video} resizeMode='cover'
          
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            shouldPlay            
            isLooping
            style={{
              width:'80%',
              height:320,
              top:'30%',
              left:'10%',
              //right:0,
              position:'absolute',
              alignSelf:'center',
            }} />
        ) : null}
         {shouldShow2 ? ( 
          <TouchableOpacity style={{width:'96%',
          height:'9%',
          left:'2%',
          top:'72%',
          borderRadius:10,
          justifyContent:'center',
          backgroundColor:'#5e788c'}} onPress={kno} disabled={disabl}>
            <Text style={{
               color: 'white',
               fontFamily: 'PressStart2P-regular',
               alignSelf:'center',
               
            }}>{y}</Text>
          </TouchableOpacity>
        ) : null}
        
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end'
        }}>
          <View style={{
            bottom: 0,
            backgroundColor: '#435d73',
            height: 450,
            width: '100%',
            borderTopColor: '#2e4659',
            borderTopWidth: 5

          }}>
            <View style={{
              width: '94%',
              left: '3%',
              height: '15%',
              top: '5%',
              backgroundColor: '#7a95a7',
              borderRadius: 10,
              borderColor: '#5e788c', 
              borderWidth: 3

            }}>
              <MaterialCommunityIcons name="sword" size={54} color="white" style={{
                left: 1,
                top: 5,
                position: 'relative'
              }} />
              <Text style={{
                left: 55,
                top: '7%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                color: 'white'
              }}>Strange:{abbrNum(parseInt(strange))}</Text>
              <View style={{
                backgroundColor: '#7a95a7',
                height: '50%',
                width: '60%',
                left: '20%',
                top: '-50%',
                justifyContent: 'center'
              }}><Text style={{
                position: 'absolute',
                right: '83%',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'white'
              }}>{abbrNum(parseInt(strange))}</Text><Feather name="chevrons-right" size={24} color="green" style={{ left: '19%' }} /><Text style={{
                left: '32%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'green'
              }}>{abbrNum(parseInt(strange)+parseInt(prestige))}</Text></View>
              <TouchableOpacity onPress={plata} style={{
                backgroundColor: '#5e788c',
                height: '80%',
                top: '10%',
                width: '35%',
                position: 'absolute',
                left: '63%',
                borderRadius: 10
              }}><Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '35%', left: '5%', color: 'white', fontSize:15
              }}>${abbrNum(price)}</Text></TouchableOpacity>
            </View>
            <View style={{
              width: '94%',
              left: '3%',
              height: '15%',
              top: '8%',
              backgroundColor: '#7a95a7',
              borderRadius: 10,
              borderColor: '#5e788c', 
              borderWidth: 3
            }}>
               <AntDesign name="clockcircleo" size={48} color="white" style={{
                left: 1,
                top: 5,
                position: 'relative'
              }} />
              <Text style={{
                left: 55,
                top: '7%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                color: 'white'
              }}>Up:{abbrNum(parseInt(passive))}</Text>
              <View style={{
                backgroundColor: '#7a95a7',
                height: '50%',
                width: '60%',
                left: '20%',
                top: '-50%',
                justifyContent: 'center'
              }}><Text style={{
                position: 'absolute',
                right: '83%',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'white'
              }}>{abbrNum(parseInt(passive))}</Text><Feather name="chevrons-right" size={24} color="green" style={{ left: '19%' }} /><Text style={{
                left: '32%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'green'
              }}>{abbrNum(parseInt(passive)+parseInt(prestige))}</Text></View>
              <TouchableOpacity onPress={plata2} style={{
                backgroundColor: '#5e788c',
                height: '80%',
                top: '10%',
                width: '35%',
                position: 'absolute',
                left: '63%',
                borderRadius: 10
              }}><Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '35%', left: '5%', color: 'white', fontSize:15
              }}>${abbrNum(passivePrice)}</Text></TouchableOpacity>
            </View>
          
          <View style={{
              width: '94%',
              left: '3%',
              height: '15%',
              top: '11%',
              backgroundColor: '#7a95a7',
              borderRadius: 10,
              borderColor: '#5e788c', 
              borderWidth: 3
            }}>
               <MaterialCommunityIcons name="sword-cross" size={54} color="white" style={{
                left: 1,
                top: 5,
                position: 'relative'
              }} />
              <Text style={{
                left: 55,
                top: '7%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                color: 'white'
              }}>CritDmg:{tex(parseInt(crit),parseInt(crit)+'%')}</Text>
              <View style={{
                backgroundColor: '#7a95a7',
                height: '50%',
                width: '60%',
                left: '20%',
                top: '-50%',
                justifyContent: 'center'
              }}><Text style={{
                position: 'absolute',
                right: '83%',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'white'
              }}>{tex(parseInt(crit),parseInt(crit)+'%')}</Text><Feather name="chevrons-right" size={24} color="green" style={{ left: '19%' }} /><Text style={{
                left: '32%',
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '30%',
                color: 'green'
              }}>{tex(parseInt(crit)+1,parseInt(crit)+1+'%')}</Text></View>
              <TouchableOpacity onPress={plata3} style={{
                backgroundColor: '#5e788c',
                height: '80%',
                top: '10%',
                width: '35%',
                position: 'absolute',
                left: '63%',
                borderRadius: 10
              }} disabled={(block == 'true' ? true : false)}><Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '35%', left: '5%', color: 'white', fontSize:15
              }}>{tex2(abbrNum(tex(parseInt(crit),parseInt(critPrice))))}</Text></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={press} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: 0,
          bottom: 0,
          position: 'absolute',
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            justifyContent:'center',
            alignItems:'center',
        }}><Entypo name="arrow-up" size={48} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={press1} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33%',
          left: '33.5%',
          bottom: 0,
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            position:'absolute',
            justifyContent:'center',
            alignItems:'center',
        }}><Feather name="shopping-cart" size={48} color="white"/></TouchableOpacity>
        <TouchableOpacity onPress={press2} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: '66%',
          bottom: 0,
          borderTopColor: '#435d73',
          justifyContent:'center',
          alignItems:'center',
            borderTopWidth: 5}}>
              <FontAwesome name="refresh" size={48} color="white" />
        </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        visible={modalVisible1}
        transparent={true}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{
            bottom: 0,
            backgroundColor: '#435d73',
            height: 450,
            width: '100%',
            borderTopColor: '#2e4659',
            borderTopWidth: 5

          }}>
            <TouchableOpacity style={{height:'20%',width:'90%', 
             top:'5%',
             left:'5%',
             borderRadius:10,
             justifyContent:'center',
             backgroundColor: '#7a95a7',
             borderColor: '#5e788c', 
             borderWidth: 3}} 
             onPress={change} 
             disabled={shouldShow} 
             activeOpacity={0.5}>
              <Image
                  source={require('./ima/slmin.png')} backgroundColor='#7a95a7' left='5%'>
                </Image>
           <Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '29%', left:'35%', color: 'white', fontSize:30
              }}>{tex3(shouldShow,'$500k')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:'18%',
            width:'90%',
            top:'8%',
            left:'5%',
            borderRadius:10,
            backgroundColor: '#7a95a7',
             borderColor: '#5e788c', 
             borderWidth: 3,
            justifyContent:'center'}} 
            onPress={change2} 
            disabled={shouldShow2} 
            activeOpacity={0.5}>
              <FontAwesome name="bomb" size={48} color="white" style={{left:'5%', top:0}}/>
           <Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '29%', left:'25%', color: 'white', fontSize:30
              }}>{tex3(shouldShow2,'$1m')}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={press} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: 0,
          bottom: 0,
          position: 'absolute',
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            justifyContent:'center',
            alignItems:'center',
        }}><Entypo name="arrow-up" size={48} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={press1} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33%',
          left: '33.5%',
          bottom: 0,
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            position:'absolute',
            justifyContent:'center',
            alignItems:'center',
        }}><Feather name="shopping-cart" size={48} color="white"/></TouchableOpacity>
        <TouchableOpacity onPress={press2} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: '66%',
          bottom: 0,
          borderTopColor: '#435d73',
          justifyContent:'center',
          alignItems:'center',
            borderTopWidth: 5}}>
              <FontAwesome name="refresh" size={48} color="white" />
        </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        visible={modalVisible2}
        transparent={true}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{
            bottom: 0,
            backgroundColor: '#435d73',
            height: 450,
            width: '100%',
            borderTopColor: '#2e4659',
            borderTopWidth: 5

          }}>
            <Text style={{
              fontFamily: 'PressStart2P-regular',
              left: '10%',
              top: '3%',
              color: 'white'
            }}>типу щось важливе.......</Text>
            <Text style={{
              left:'30%',
              top:'8%',
              color:'white',
              fontFamily: 'PressStart2P-regular'
            }}>Prestige:{prestige}</Text>
 <TouchableOpacity style={{height:'15%',
 width:'60%',
  top:'10%',
  left:'20%', 
  borderRadius:10,
  backgroundColor: '#7a95a7',
  borderColor: '#5e788c', 
  borderWidth: 3}} 
  onPress={prest}>
           <Text style={{
                position: 'absolute',
                fontFamily: 'PressStart2P-regular',
                top: '28%',alignSelf:'center', color: 'white', fontSize:30
              }}>${abbrNum(parseInt(prestigePrice))}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={press} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: 0,
          bottom: 0,
          position: 'absolute',
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            justifyContent:'center',
            alignItems:'center',
        }}><Entypo name="arrow-up" size={48} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={press1} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33%',
          left: '33.5%',
          bottom: 0,
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            position:'absolute',
            justifyContent:'center',
            alignItems:'center',
        }}><Feather name="shopping-cart" size={48} color="white"/></TouchableOpacity>
        <TouchableOpacity onPress={press2} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: '66%',
          bottom: 0,
          borderTopColor: '#435d73',
          justifyContent:'center',
          alignItems:'center',
            borderTopWidth: 5}}>
              <FontAwesome name="refresh" size={48} color="white" />
        </TouchableOpacity>
        </View>
      </Modal>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end'
      }}>
        <TouchableOpacity onPress={press} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: 0,
          bottom: 0,
          position: 'absolute',
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            justifyContent:'center',
            alignItems:'center',
        }}><Entypo name="arrow-up" size={48} color="white" /></TouchableOpacity>
        <TouchableOpacity onPress={press1} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33%',
          left: '33.5%',
          bottom: 0,
          borderTopColor: '#435d73',
            borderTopWidth: 5,
            position:'absolute',
            justifyContent:'center',
            alignItems:'center',
        }}><Feather name="shopping-cart" size={48} color="white"/></TouchableOpacity>
        <TouchableOpacity onPress={press2} activeOpacity={1} style={{
          backgroundColor: '#5e788c',
          height: 60,
          width: '33.5%',
          left: '66%',
          bottom: 0,
          borderTopColor: '#435d73',
          justifyContent:'center',
          alignItems:'center',
            borderTopWidth: 5}}>
              <FontAwesome name="refresh" size={48} color="white" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  
})