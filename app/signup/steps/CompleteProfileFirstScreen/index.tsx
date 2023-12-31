import { Spinner, View } from 'native-base'
import React, { useCallback, useState } from 'react'
import PopupComponent from '../../../../components/animations/PopupComponent'
import MainButton from '../../../../components/core/MainButton'
import Translator from '../../../../components/hoc/Translator'
import { strings } from '../../../../utils/strings'
import { getOrientation } from '../../../../utils/utilityFunctions'
import HeaderText from '../PhoneVerificationScreen/components/HeaderText'
import SubHeaderText from '../PhoneVerificationScreen/components/SubHeaderText'
import { useDispatch } from 'react-redux'
import { useRouter } from 'expo-router'
import CompleteProfileForm from '../../components/CompleteProfileForm'

const index = () => {
    const [loading,setLoading] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch();
  const submitHandler = useCallback(() => {
    setLoading(true);
    setTimeout(() => console.log("Submitted"), 3000);
 
      router.push("/signup/steps/CompleteProfileSecondScreen")
   
  }, [loading]);
  return (
      <><PopupComponent>
          <HeaderText text={strings.setupProfile} />
      </PopupComponent><PopupComponent>
              <SubHeaderText
                  text={{
                      ar: "لنقم بتجهيز البروفايل الخاص بك!",
                      en: "Let's start with setting up your profile!",
                      fr: "Commonçons par la création de votre profile",
                  }} />
          </PopupComponent>
              <CompleteProfileForm />
          <PopupComponent>
          
              <MainButton
                    margin={10}
                  rightIcon={getOrientation() === "LATIN" ? null : null}
                  leftIcon={getOrientation() === "ARABIC" ? null : null}
                  isLoading={loading}
                  isDisabled={loading == true}
                  onPress={submitHandler}
                  orientation={getOrientation()}
              >
                  {loading === true ? (
                      <Spinner color={"muted.50"} />
                  ) : (
                      <Translator text={strings.next} color={"muted.100"} />
                  )}
              </MainButton>
          </PopupComponent></>
  )
}

export default index
