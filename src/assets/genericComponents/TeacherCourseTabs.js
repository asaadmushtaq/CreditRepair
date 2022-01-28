import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { PATH } from "../../config";
export function TeacherCourseTabs() {
  let history = useHistory();
  return (
    <div className="d-flex justify-content-center pb-3 pt-4">
      <div className="btn_group mt-5 ">
        <ButtonGroup aria-label="Basic example">
          {/* Add information */}
          {history.location.pathname === PATH.TEACHERCOURSEINFORMATION ? (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary">
                <div>1</div>Add information
              </Button>
            </Link>
          ) : (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary">
                <FaCheckCircle className="mr-2" size={22} />
                Add information
              </Button>
            </Link>
          )}
          {/* Add curriculum */}
          {history.location.pathname === PATH.TEACHERCURRICULUMLIST ? (
            <Link to={PATH.TEACHERCURRICULUMLIST}>
              <Button variant="secondary" className="active">
                <div>2</div>Add curriculum
              </Button>
            </Link>
          ) : history.location.pathname === PATH.CREATENEWSECTION ? (
            <Link to={PATH.TEACHERCURRICULUMLIST}>
              <Button variant="secondary" className="active">
                <div>2</div>Add curriculum
              </Button>
            </Link>
          ) : history.location.pathname === PATH.ADDLECTURES ? (
            <Link to={PATH.TEACHERCURRICULUMLIST}>
              <Button variant="secondary" className="active">
                <div>2</div>Add curriculum
              </Button>
            </Link>
          ) : (
            <Link to={PATH.TEACHERCURRICULUMLIST}>
              <Button variant="secondary">
                <FaCheckCircle className="mr-2" size={22} />
                Add curriculum
              </Button>
            </Link>
          )}
          {/* Add a price */}
          {history.location.pathname === PATH.PRICINGPLAN ? (
            <Link to={PATH.PRICINGPLAN}>
              <Button variant="secondary" className="active">
                <div>3</div>Add a price
              </Button>
            </Link>
          ) : history.location.pathname === PATH.TEACHERCURRICULUMLIST ? (
            <Link to={PATH.PRICINGPLAN}>
              <Button variant="secondary">
                <div>3</div>Add a price
              </Button>
            </Link>
          ) : history.location.pathname === PATH.TEACHERPRICINGLIST ? (
            <Link to={PATH.PRICINGPLAN}>
              <Button variant="secondary" className="active">
                <div>3</div>Add a price
              </Button>
            </Link>
          ) : (
            <Link to={PATH.PRICINGPLAN}>
              <Button variant="secondary">
                <FaCheckCircle className="mr-2" size={22} />
                Add a price
              </Button>
            </Link>
          )}
          {/* Publish */}
          {history.location.pathname === PATH.TEACHERCOURSEINFORMATION ? (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary" className="active">
                <div>4</div>Publish
              </Button>
            </Link>
          ) : history.location.pathname === PATH.TEACHERCURRICULUMLIST ? (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary">
                <div>4</div>Publish
              </Button>
            </Link>
          ) : history.location.pathname === PATH.PRICINGPLAN ? (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary">
                <div>4</div>Publish
              </Button>
            </Link>
          ) : (
            <Link to={PATH.TEACHERCOURSEINFORMATION}>
              <Button variant="secondary">
                <FaCheckCircle className="mr-2" size={22} />
                Publish
              </Button>
            </Link>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
}
