---
type: daily
date: <% tp.file.title %>
---

# <% tp.file.title %>

>**Prev:: **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]
>
>**Next:: **[[<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]
>
>**Parent:: **[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]], [[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]
>
>---
>- [google calendar link](https://calendar.google.com)
>- [tracking app]()

> [! morning] ## Morning Review
> ### 🌅 Morning Log
> log-fell-asleep-time:: 
> log-wake-up-time:: 
> log-sleep-amount:: 
> log-sleep-rating:: 
>
> log-morning:: 
> <br>
> ### ✅ Day Planning
> - [ ] 
> <br>
> ### 👾 Extra things to do
> - [ ]
> <br>
> ### 📆 Schedule
> 
> <br>

> [! datalog]  ## Log
> ### 🏃‍♀️ Exercise
> - log-cycling:: 
> - log-push-up:: 
> <br>
> ### ☕ Consumables
> - log-soda:: 
> - log-water:: 
> - log-food:: 
> - log-healthy-eating:: 
><br>
> ### ♻ Habits
> - log-minibrush:: 
> - log-meditation:: 
> - log-breakfast:: 
> - log-walk:: 
> <br>
> ### ⌚ Time Tracking
> - log-creative:: 0:00
> - log-gaming:: 0:00
> - log-learning:: 0:00
> - log-working:: 0:00
> - log-socializing:: 0:00
> - log-relationship:: 0:00
> - log-cat-playtime:: 0:00
> <br>

> [! journal] ## Journal
> #tag
> Text

> [! evening] ## Evening Review 
> ### Evening Log
> - log-day-rating:: 
> - log-day-review:: 
> 
> <br>
> 
> > [! evening] ### Files created today
> > ```dataview
> > list
> > where file.cday = date(this.file.name)
> > sort file.ctime desc
> > ```
> 
> <br>
> 
> > [! evening] ### Files updated today
> > ```dataview
> > list
> > where file.mday = date(this.file.name)
> > sort file.ctime desc
> > ```
