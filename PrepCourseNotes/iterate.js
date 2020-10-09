let people = [
    {
      name: "Eliza",
      city: "Los Angeles",
      likes: ["pizza", "karaoke", "improv", "dancing"],
    },
    {
      name: "Shiela",
      city: "Denver",
      likes: ["photography", "painting", "movies"],
    },
    {
      name: "Ben",
      city: "Los Angeles",
      likes: ["pizza", "karate", "sci-fi", "poetry"],
    },
    {
      name: "Mohammed",
      city: "Los Angeles",
      likes: ["sailing", "golf", "kayaking"],
    },
    {
      name: "Yukiko",
      city: "Tokyo",
      likes: ["ramen", "karaoke", "jazz", "hamburgers"],
    },
    {
      name: "Chris",
      city: "Brooklyn",
      likes: ["pizza", "karaoke", "improv", "cooking"],
    },
  ];

function countLikesByTopic(people, topic) {
    let likeCount = 0
    people.forEach((person) => {
      person.likes.forEach((like) => {
        if (like === topic) {
          likeCount++
        }
      })
    })
    return likeCount
}

console.log(countLikesByTopic(people, 'pizza'))
