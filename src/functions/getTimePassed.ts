export default (dateString: string) => {
  const now: any = new Date();
  const pastDate: any = new Date(dateString);
  const diffInSeconds = Math.floor((now - pastDate) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`; // seconds
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m`; // minutes
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h`; // hours
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d`; // days
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months}mo`; // months
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years}y`; // years
  }
};

//   // Example usage
//   console.log(timePassed("2024-12-25T12:00:00Z")); // Outputs time passed in a friendly format
