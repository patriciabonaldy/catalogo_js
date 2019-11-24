import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Cubos",
    Icono: "cube",
    isRoot: true,
    items: [
      {
        name: "DIINEF 01",
        Icono: "cube",
        isRoot: false,
        link:"/cubo"
      },
      {
        name: "DIINEF 02",
        Icono: "cube",
        isRoot: false,
        link:"/cubo"
      },
      {
        name: "DIINEF 03",
        Icono: "cube",
        link:"/cubo"
      },
      {
        name: "DIINEF 04",
        Icono: "cube",
        link:"/cubo"
      },
      {
        name: "DIINEF 05",
        Icono: "cube",
        link:"/cubo"
      },
      {
        name: "DIINEF 06",
        Icono: "cube",
        link:"/cubo"
      }
    ]
  },
  {
    name: "Muestra",
    Icono: "th",
    isRoot: true,
    items: [
      {
        name: "ACCIONES VINCULADAS A REGIMENES PROMOCIONALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "REGIMENES PROMOCIONALES Y/O BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "REGIMENES PROMOCIONALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      },
      {
        name: "BENEFICIOS FISCALES",
        Icono: "th",
        link:"/atributo"
      }      
    ]
  },
  {
    name: "Configurar Roles",
    Icono: "group",
    items: [
      {
        name: "Cubos",
        Icono: "cube",
        link:"/atributo"
      },
      {
        name: "Atributos",
        Icono: "th",
        link:"/atributo"
      }
    ]
  }
];

const AppMenu: React.FC = () => {
  const classes = useStyles();
  const [state] = React.useState({
    menu : appMenuItems});

  return (
    <List component="nav" className={classes.appMenu}>
      {state.menu.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: "90%"
    },
    menuItem: {
      width: drawerWidth
    }
  })
);

export default AppMenu;