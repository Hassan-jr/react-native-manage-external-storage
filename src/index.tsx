import { NativeModules, Platform } from 'react-native';

var PermissionFile = NativeModules.PermissionFile;

function manageExternalStorage(): { isGranted: boolean; message: string } {
  var isGranted2 = false
  if (Platform.Version >= 30){
    PermissionFile.checkAndGrantPermission(
      err => {
        isGranted2 = false
        return {isGranted: false, message: err}
      },
      res => {
        if (res) {
          isGranted2 = true
          return {isGranted: true, message: "Permission Granted"}
        } else {
          isGranted2 = false
          return {isGranted: false, message: res}
        }
      },
    );
  }else{
    isGranted2 = false
    return {isGranted: false, message: "Manage External Storage Permission is only Available from android 10 (Api level 30 and above"}
  }
  return {isGranted: isGranted2, message: ""}
 
}

export default {
  manageExternalStorage
}