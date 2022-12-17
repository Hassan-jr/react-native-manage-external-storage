import { NativeModules } from 'react-native';

var PermissionFile = NativeModules.PermissionFile;

export default async function manageExternalStorage() {
   await PermissionFile.checkAndGrantPermission(
      err => { 
        // return {isGranted: false, message: "An error occored"}
       if(err){
        return false
       }else{
        return false
       }
       
      },
      res => {
        if (res) {
          // return {isGranted: true, message: "Permission Granted"}
         
          return true
        } else {
          // return {isGranted: false, message: "An error occored"}
         
          return false
        }
      },
    )
   
   
 
}

