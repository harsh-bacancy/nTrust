package com.ntrust;
import android.content.Intent;


import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import android.os.Bundle; // here 
import org.devio.rn.splashscreen.SplashScreen; // here 


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "nTrust";
    }
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
    
   @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        /* callbackManager.onActivityResult(requestCode, resultCode, data); */
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
   return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
  
}
