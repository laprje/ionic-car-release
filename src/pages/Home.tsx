import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import React, { Component } from "react";
import axios from 'axios'
import "./Home.css";
import {car} from 'ionicons/icons'

interface HomePageProps {}

interface HomePageState {}

export default class HomePage extends Component<HomePageProps, HomePageState> {

  getCars() {
    axios.get('/api/cars').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  componentDidMount() {
    this.getCars()
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonIcon icon={car}></IonIcon>
            <img src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/O2LEGEA1.jpg" />
          </IonCard>
          <IonCard>
            <img src="https://d32c3oe4bky4k6.cloudfront.net/articles-videos/-/media/uscamediasite/images/story-images/2019/03/12/lfa_501.ashx?modified=20190312180818&mw=1440&hash=E7B5CECD19FB80028E842AA8C4BF04E6952780D4" />
              <IonCardHeader>
                <IonCardTitle>Lexus LFA Nurburgring Edition</IonCardTitle>
                <IonCardSubtitle>$USD 450,000</IonCardSubtitle>
              </IonCardHeader>     
              <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad eum earum minus aperiam autem dolor cupiditate illum asperiores nobis voluptatibus iusto doloribus, aspernatur, dolorum ipsa. Aspernatur inventore quam voluptatem.</IonCardContent>     
          </IonCard>
          <IonCard>
            <img src="https://the-drive-2.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fd5db501f-5b0b-4e93-bfdd-d954edefe143-large.jpg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=edc812b5335746e8f84820de65aa1fe3" />
          </IonCard>
          {/* <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList> */}
        </IonContent>
      </IonPage>
    );
  }
}
