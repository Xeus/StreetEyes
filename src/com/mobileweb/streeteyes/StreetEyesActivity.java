package com.mobileweb.streeteyes;

import android.app.Activity;
import android.content.Intent;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import com.mobileweb.streeteyes.R;
import com.phonegap.*;
import android.os.Bundle;

public class StreetEyesActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
    
    public boolean onCreateOptionsMenu(Menu menu) {
    	 
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return true;
    }
    
    /*public boolean onOptionsItemSelected(MenuItem item) {
    	 
        //respond to menu item selection
    	switch (item.getItemId()) {
        case R.id.about:
        	startActivity(new Intent(this, About.class));
        	return true;
        case R.id.search:
        	startActivity(new Intent(this, Search.class));
        	return true;
        case R.id.refresh:
            startActivity(new Intent(this, Refresh.class));
            return true;
        default:
        return super.onOptionsItemSelected(item);
    	}
    } */
}