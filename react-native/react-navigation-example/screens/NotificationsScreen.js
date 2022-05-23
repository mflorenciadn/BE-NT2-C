import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import notifications from "../services/notifications";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//////////////////
// Con FlatList //
//////////////////
const NotificationItem = ({
  notification,
  backgroundColor,
  textColor,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.notificationItem, backgroundColor]}
    >
      <MaterialCommunityIcons
        style={styles.followerIcon}
        name="account-multiple-plus"
        color={iconColor}
      />
      <Text style={[styles.notificationText, textColor]}>
        {notification.message}
      </Text>
    </TouchableOpacity>
  );
};

export default function NotificationsScreen() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedItemId ? "#009b97" : "transparent";
    const color = item.id === selectedItemId ? "white" : "black";
    const iconColor = item.id === selectedItemId ? "#fdfdfd" : "#009b97";
    return (
      <NotificationItem
        notification={item}
        onPress={() => setSelectedItemId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        iconColor={iconColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      <FlatList
        style={styles.notificationsList}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => notifications.indexOf(item)}
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View
              style={[styles.separator, highlighted && { marginLeft: 0 }]}
            />
          ))
        }
      />
    </View>
  );
}

////////////////////
// Con ScrollView //
////////////////////

// export default function NotificationsScreen() {

// const NotificationItem = ({
//   notification,
// }) => {
//   return (
//     <View style={styles.notificationItem}
//     >
//       <MaterialCommunityIcons
//         style={styles.followerIcon}
//         name="account-multiple-plus"
//         color="teal"
//       />
//       <Text style={styles.notificationText}>{notification}</Text>
//     </View>
//   );
// };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Notificaciones</Text>
//       <ScrollView style={styles.notificationsList} showsHorizontalScrollIndicator={false}>
//         {notifications.map((notification, index) => (
//           <NotificationItem key={index} notification={notification} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  notificationsList: {
    marginVertical: "5%",
  },
  notificationItem: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  followerIcon: {
    marginVertical: "5%",
    marginLeft: "5%",
  },
  notificationText: {
    margin: "5%",
  },
});
