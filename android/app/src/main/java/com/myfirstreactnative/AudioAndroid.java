package com.myfirstreactnative;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Eric on 2015-11-11.
 */
public class AudioAndroid extends ReactContextBaseJavaModule
{
    public AudioAndroid(ReactApplicationContext reactContext)
    {
        super(reactContext);
    }

    @Override
    public String getName()
    {
        return "AudioAndroid";
    }

    @ReactMethod
    public void record()
    {
        Toast.makeText(getReactApplicationContext(), "record", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void stop()
    {
        Toast.makeText(getReactApplicationContext(), "stop", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void play()
    {
        Toast.makeText(getReactApplicationContext(), "play", Toast.LENGTH_SHORT).show();
    }
}
