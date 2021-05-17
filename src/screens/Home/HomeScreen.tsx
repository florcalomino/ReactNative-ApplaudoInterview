import React, { useEffect, useCallback } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
  Alert,
} from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faCode, faEnvelope, faPaw, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import * as Animatable from 'react-native-animatable'

import Separator from '../../components/Separator/Separator'
import LightText from '../../components/LightText/LightText'
import RegularText from '../../components/RegularText/RegularText'
import BoldText from '../../components/BoldText/BoldText'
import { technicalKnowledgeOne, technicalKnowledgeTwo, jobExperience } from '../../constants/Info'
import Colors from '../../constants/Colors'
import { getLocalStorage } from '../../actions'
import { useOrientation } from '../../hooks/useOrientation'

import global from '../globalStyles'
import styles from './HomeScreen.styles'

function HomeScreen({ getLocalStorage }) {
  const orientation = useOrientation()
  const landscape = orientation === 'landscape'

  useEffect(() => {
    //Initialize local storage
    getLocalStorage()
  }, [])

  const {
    container,
    row,
    spaceBetween,
    alignCenter,
    marginRightTen,
    marginBottomTen,
    marginTopTen,
    fullWidth,
    flexOne,
    justifyCenter,
    paddingLands,
  } = global

  const KnowledgeItem = ({ item }) => {
    const { knowledgeItem, knowledgeText } = styles

    return (
      <View style={knowledgeItem}>
        <FontAwesomeIcon color={Colors.red} icon={faCheckCircle} />
        <LightText style={knowledgeText} text={item.title} />
      </View>
    )
  }

  const MainTraitItem = ({ trait, icon, style = {}, delay }) => {
    const { traitItem, traitText } = styles
    return (
      <Animatable.View animation="fadeIn" iterationCount={1} delay={delay}>
        <View style={[traitItem, style]}>
          <FontAwesomeIcon size={24} color={Colors.red} icon={icon} />
          <LightText style={traitText} text={trait} />
        </View>
      </Animatable.View>
    )
  }

  const JobExperienceItem = ({ item }) => {
    const { jobItem, jobTitle, jobPosition, jobDescription } = styles
    return (
      <View style={jobItem}>
        <BoldText style={jobTitle} text={item.company} />
        <RegularText text={item.duration} />
        <LightText style={jobPosition} text={item.position} />
        <View style={marginTopTen}>
          <LightText style={jobDescription} text={item.description} />
          {item.bullets &&
            item.bullets.map((bullet, index) => {
              return (
                <View style={[row, alignCenter, marginBottomTen]} key={index}>
                  <FontAwesomeIcon
                    style={marginRightTen}
                    size={13}
                    color={Colors.red}
                    icon={faCheckCircle}
                  />
                  <LightText style={{ color: Colors.gray, flex: 1 }} text={bullet} />
                </View>
              )
            })}
        </View>
      </View>
    )
  }

  const LanguageItem = ({ lang, level }) => {
    const { langItem, langText, langLevel } = styles
    return (
      <View style={langItem}>
        <BoldText style={langText} text={lang} />
        <LightText style={langLevel} text={level} />
      </View>
    )
  }

  const MailLink = ({ url }) => {
    const handleLink = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)

      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Can't open this URL: ${url}`)
      }
    }, [url])

    return (
      <TouchableOpacity style={mailLink} onPress={handleLink}>
        <Animatable.View animation="flash" iterationCount="infinite" direction="alternate">
          <FontAwesomeIcon size={20} color={Colors.lightGray} icon={faEnvelope} />
        </Animatable.View>
      </TouchableOpacity>
    )
  }

  const {
    traitBkg,
    traitScrollview,
    profilePic,
    mainBkg,
    mainWrapper,
    nameWrapper,
    name,
    subtitle,
    mailLink,
    picBorder,
    role,
    languageWrapper,
  } = styles

  return (
    <ScrollView>
      <View>
        {!landscape && (
          <ImageBackground
            style={mainBkg}
            resizeMode="cover"
            source={require('../../assets/images/profile-bkg.jpg')}
          />
        )}
        <View style={[mainWrapper, landscape && justifyCenter]}>
          <View>
            <View style={picBorder}>
              <Image style={profilePic} source={require('../../assets/images/profile-pic.jpg')} />
            </View>
            <MailLink url="mailto:florcalomino@gmail.com" />
          </View>
          <View style={nameWrapper}>
            <RegularText style={name} text="Florencia Calomino" />
            <LightText style={role} text="UX Developer" />
          </View>
        </View>
      </View>

      <ImageBackground
        style={traitBkg}
        resizeMode="contain"
        source={require('../../assets/images/this-is-me.png')}
      >
        <ScrollView
          style={traitScrollview}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={landscape && [justifyCenter, flexOne]}
        >
          <MainTraitItem trait="Developer" icon={faCode} delay={500} />
          <MainTraitItem trait="Cat Person" icon={faPaw} delay={1000} />
          <MainTraitItem trait="Photograph" icon={faCamera} delay={1500} />
          <MainTraitItem
            style={{ marginRight: 40 }}
            trait="Cinephile"
            icon={faTicketAlt}
            delay={2000}
          />
        </ScrollView>
      </ImageBackground>

      <View style={[container, landscape && paddingLands]}>
        <RegularText style={subtitle} text="Technical Knowledge" />
        <Separator />
        <View style={[row, spaceBetween]}>
          <View style={flexOne}>
            {technicalKnowledgeOne.map((techItem, techIndex) => {
              return <KnowledgeItem item={techItem} key={techIndex} />
            })}
          </View>
          <View style={flexOne}>
            {technicalKnowledgeTwo.map((techItem, techIndex) => {
              return <KnowledgeItem item={techItem} key={techIndex} />
            })}
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.lightGray }}>
        <ImageBackground
          style={fullWidth}
          resizeMode="contain"
          source={require('../../assets/images/languages.png')}
        >
          <View style={languageWrapper}>
            <LanguageItem lang="Spanish" level="Native" />
            <LanguageItem lang="English" level="Advanced" />
            <LanguageItem lang="French" level="Intermediate" />
          </View>
        </ImageBackground>
      </View>
      <View style={[container, landscape && paddingLands]}>
        <RegularText style={subtitle} text="Main Job Experience" />
        <Separator />
        {jobExperience.map((jobItem, jobIndex) => {
          return <JobExperienceItem item={jobItem} key={jobIndex} />
        })}
      </View>
    </ScrollView>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  getLocalStorage,
})(HomeScreen)
