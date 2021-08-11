package com.gorm.rssserver.service;

import org.springframework.stereotype.Service;

@Service
public class RssService {
    public void doNothing(){
        System.out.println("nothing");
    }
    public void basicRss(){
        System.out.println("testing Rss feed");
    }

}
//make a controller and associate with these...