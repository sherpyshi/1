import React ,{Component}from "react";
import {
    StatusBar,
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'


class App extends Component {
    render() {
    return(
        <>
          <StatusBar/> 
          <SafeAreaView style={styles.container}>
           <view style={styles.header}>

           </view>

           <view style={styles.main}>

           </view>

           <view style={styles.footer}>

           </view>
           
           
            </SafeAreaView>            
        </>
    );
}
}
    


export default App


const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },
    header:{
     flex:1,
      backgroundColor:'#eee'
    },
    main:{
    flex:3,
    backgroundColor:'#fff',

    },
    footer:{
    flex:1,
    backgroundColor:'#eee',
    },
})