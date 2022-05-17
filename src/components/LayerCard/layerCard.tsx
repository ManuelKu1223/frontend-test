import styled from "@emotion/styled"
import Card from "@mui/material/Card/Card"
import CardContent from "@mui/material/CardContent/CardContent"
import CardMedia from "@mui/material/CardMedia/CardMedia"
import Checkbox from "@mui/material/Checkbox/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel"
import FormGroup from "@mui/material/FormGroup/FormGroup"
import React, { useState } from "react"
import sampleImage from "../../../public/sample/test.jpeg"
import './layerCard.css';

export interface LayerCardProps {
  checked: boolean
  label: string
  onCheck?: () => void
}

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-root": {
    margin: '0 !important'
  }
});

export const LayerCard = ({ checked, label }: LayerCardProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  return (
    <Card sx={{ width: 229, "&:hover": { boxShadow: "0 0 0 2px #21b6A8" } }}>
      <CardMedia component="img" height="100" image={sampleImage} alt="sample image" />
      <CardContent sx={{ padding: "6px 9px !important" }}>
        <FormGroup>
          <StyledFormControlLabel
            control={<Checkbox color="primary" checked={isChecked} onInput={() => setIsChecked(!isChecked)} />}
            label={label}
          />
        </FormGroup>
      </CardContent>
    </Card>
  )
}

LayerCard.defaultProps = {
  checked: false,
  label: ""
}
