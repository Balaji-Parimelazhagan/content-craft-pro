const generateMockData = () => {
  const tagsList = [
    'Development',
    'BestPractices',
    'Coding',
    'Frameworks',
    'Backend',
    'Frontend',
    'DevOps',
    'DataScience',
    'Visualization',
    'MachineLearning',
    'Analytics',
    'BigData',
    'AI',
    'Privacy',
    'Cybersecurity',
    'Threats',
    'Security',
    'IncidentResponse',
    'CodingSecurity',
    'Compliance',
    'Hacking',
    'Cloud',
    'Migration',
    'Infrastructure',
    'MultiCloud',
    'Serverless',
    'CostOptimization',
    'Product',
    'Design',
    'UXResearch',
    'Agile',
    'Lifecycle',
    'DesignThinking',
    'EmergingTech',
    'Blockchain',
    'IoT',
    'ARVR',
    'EdgeComputing',
    'Quantum',
    'Industry',
    'Healthcare',
    'Fintech',
    'Ecommerce',
    'EdTech',
    'Automotive',
    'Trending',
    'AIML',
    'BlockchainDev',
    'CyberTrends',
  ]

  const getRandomTags = () => {
    const maxTags = Math.floor(Math.random() * (tagsList.length + 1))
    const selectedTags = new Set()

    while (selectedTags.size < maxTags) {
      const randomIndex = Math.floor(Math.random() * tagsList.length)
      selectedTags.add(tagsList[randomIndex])
    }

    return [...selectedTags]
  }

  const mockData = []

  for (let i = 1; i <= 20; i++) {
    const isLiked = Math.random() < 0.5
    const data = {
      id: i,
      title: `Title ${i} Lorem ipsum dolor sit amet`,
      tags: getRandomTags(),
      jist: `Jist for content ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      content: `Content for item ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      isLiked: isLiked, // Random boolean
      likes: Math.floor(Math.random() * 50), // Random number less than 50
      isDisliked: Math.random() < 0.5, // Random boolean
      dislikes: !isLiked, // Random number less than 50
      isBookmarked: Math.random() < 0.5, // Random boolean
      views: Math.floor(Math.random() * 100), // Random number less than 100
      thumbnail: `https://via.placeholder.com/150?text=Thumbnail${i}`, // Placeholder image URL
    }

    mockData.push(data)
  }

  return mockData
}

export const contents = generateMockData()
