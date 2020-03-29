const resolveStatusColor = (status,alpha= false) =>{
  if(status ==="Delivering"){
    return `rgba(82, 138, 250, ${alpha ? 1 : 0.2})`
  }

  if(status === "Scheduled") {
    return `rgba(113, 107, 152, ${alpha ? 1 : 0.2})`
  }

  if(status === "Ended") {
    return `rgba(7, 130, 119, ${alpha ? 1 : 0.2})`
  }
}

export default {
  resolveStatusColor,
};