function destroyer(...arr) {
  const shootingRange = arr.slice(0, 1).flat();
  const bullets = arr.slice(1);
  return (shootingRange.filter(item => !bullets.includes(item)));
}

destroyer(['tree', 'hamburger', 53], 'tree', 53); // should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
