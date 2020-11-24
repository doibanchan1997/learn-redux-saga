const styles = (theme) => ({
    modal: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
      },
      header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between'
      },
      icon: {
    
      },
      title: {
        color: theme.color.textColor,
        fontWeight: 700,
        textTransform: 'uppercase'
      },
});
export default styles;
