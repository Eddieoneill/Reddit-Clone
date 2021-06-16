import React from 'react'
import './SideNav.css'

export default function SideNav() {
    const menus = [
        {to: '/r/popular', text: "Popular"},
        {to: '/r/all', text: "All"},
        {to: '/r/random', text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming"
    ]

    return (
        <div className="sidenav">
            <div className="sidenav_logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo-2017-present.jpg" />
            </div>
            <div className="sidenav_search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div> 
            <div className="sidenav_links">
                <ul className="sidenav_menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />
                <ul className="sidenav_subreddit">
                        {subreddits.map(sunreddit => (
                            <li><a href={`/r/${sunreddit}`}>{sunreddit}</a></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
