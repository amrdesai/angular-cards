import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts = [
        {
            title:"Neat Tree",
            username: "billu",
            content: "This is an awesome tree!",
            imageUrl: "assets/tree.jpeg"
        },
        {
            title:"Snowy Mountain",
            username: "tillu",
            content: "It's chilly over here!",
            imageUrl: "assets/mountain.jpeg"
        },
        {
            title:"Mountain Biking",
            username: "gullu",
            content: "Biking here is fun!",
            imageUrl: "assets/biking.jpeg"
        }
    ];



}
