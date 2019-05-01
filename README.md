# Michelin & Relais Chateaux

> Sleep well with Relais & Châteaux




# 🐣 Introduction
### 🏃‍♀️ Steps  done

### Michelin Restaurant

We first retrieve the list of all starred restaurants in France on the site
Michelin. To do so, we followed a tutorial on YouTube explaining how to scrap data on
an Internet site. So we went into the link of each restaurant and we got the
name of the restaurant and the name of the chef of the restaurant. We iterated this operation for all pages
of the Michelin site to recover all the Michelin starred restaurants in France. We then stored
the list in a JSON file.

### Relais Chateaux

Then we went to Relais et Châteaux. The structure of this site was more complex. For
to recover the Hotels Restaurants of France, we had to simulate the opening of the site as well as all the
intermediate steps like moving to the next page to retrieve the data we had
need thanks to puppeteer recorder.We then retrieved the data in a JSON file.


### Starred Restaurants

We then created a new JSON file in which we combined the two JSON files
in order to have only the list of hotels in which there were starred restaurants.



## 🎯 Final goal

The goal was then to recover the prices of the best deals for the weekend. To do this,
we first created a function to list every Saturday of every month.
Then we were fetched the price list of each weekend for each hotel paying attention
the dates for which the hotels were full. We then got the best deal for each
weekend in a JSON file.


## Website

[https://michelin-relaischateaux.netlify.com/](https://michelin-relaischateaux.netlify.com/)

--

**The project was done by Nathan AMAR & Ruben AMAR** 

