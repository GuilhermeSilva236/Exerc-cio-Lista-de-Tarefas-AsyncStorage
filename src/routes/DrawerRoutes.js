import { createDrawerNavigator } from "@react-navigation/drawer";
import ListaTarefas from "../screens/ListaTarefas/ListaTarefas";
import ListaTarefasAsyncStorage from "../screens/ListaTarefasAsyncStorage/ListaTarefas";


const Drawer = createDrawerNavigator()
export default function DrawerRoutes() {
    return(
        <Drawer.Navigator initialRouteName="ListaTarefasAsyncStorage">
            <Drawer.Screen name="ListaTarefasAsyncStorage" component={ListaTarefasAsyncStorage}/>
        </Drawer.Navigator>
    )
}