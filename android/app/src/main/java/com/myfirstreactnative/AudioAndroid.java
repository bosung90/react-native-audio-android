package com.myfirstreactnative;

import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

/**
 * Created by Eric on 2015-11-11.
 */
public class AudioAndroid extends ReactContextBaseJavaModule
{
    private static final String LOG_TAG = "AudioAndroid";

    private MediaRecorder mRecorder;
    private MediaPlayer mPlayer;
    private static String mFileName;

    public AudioAndroid(ReactApplicationContext reactContext)
    {
        super(reactContext);
        mFileName = Environment.getExternalStorageDirectory().getAbsolutePath();
        mFileName += "/audiorecordtest.3gp";
    }

    @Override
    public String getName()
    {
        return "AudioAndroid";
    }

    @ReactMethod
    public void record()
    {
        Toast.makeText(getReactApplicationContext(), "recordiung...", Toast.LENGTH_SHORT).show();
        mRecorder = new MediaRecorder();
        mRecorder.setAudioSource(MediaRecorder.AudioSource.VOICE_RECOGNITION);
        mRecorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        mRecorder.setOutputFile(mFileName);
        mRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);

        try {
            mRecorder.prepare();
        } catch (IOException e) {
            Log.e(LOG_TAG, "prepare() failed");
        }

        mRecorder.start();
    }

    @ReactMethod
    public void stop()
    {
        Toast.makeText(getReactApplicationContext(), "stopped", Toast.LENGTH_SHORT).show();
        if(mRecorder != null)
        {
            mRecorder.stop();
            mRecorder.release();
            mRecorder = null;
        }

        if(mPlayer != null && mPlayer.isPlaying())
        {
            mPlayer.release();
            mPlayer = null;
        }
    }

    @ReactMethod
    public void play()
    {
        Toast.makeText(getReactApplicationContext(), "playing...", Toast.LENGTH_SHORT).show();
        mPlayer = new MediaPlayer();
        try {
            mPlayer.setDataSource(mFileName);
            mPlayer.prepare();
            mPlayer.start();
        } catch (IOException e) {
            Log.e(LOG_TAG, "prepare() failed");
        }
    }
}
