import React from "react"
import useEnterpriseLinuxImages from "./useEnterpriseLinuxImages"

const EnterpriseLinuxDistros: React.FC<{ maxImageWidth: string; mobile: boolean }> = ({
  maxImageWidth,
  mobile,
}) => {
  const imageData = useEnterpriseLinuxImages()

  return (
    <>
      <div
        style={
          mobile
            ? {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto",
                alignItems: "center",
                justifyItems: "center",
                margin: "16px",
              }
            : {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }
        }
      >
        {imageData.map(({ id, fluid }) => (
          <div
            key={id}
            style={{
              width: maxImageWidth,
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              srcSet={fluid.srcSet}
              style={{ maxHeight: "120px", objectFit: "contain", margin: "0" }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default EnterpriseLinuxDistros
