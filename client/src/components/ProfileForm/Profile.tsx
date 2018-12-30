import * as React from "react";
import Card from "../Card";
import Button from "../Button";
import CardHeader from "../CardHeader";
import Notifications from "../Notifications";
import { getContactByEmail, ContactBasic } from "../../models/contacts";

interface IProps {
  contact: ContactBasic;
  onChange: (contact: ContactBasic) => void;
  onSubmit: (contact: ContactBasic) => void;
}

interface IState {}

class Profile extends React.Component<IProps, IState> {
  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  private handleChange(event: any, columnType: string) {
    this.props.onChange({
      ...this.props.contact,
      ...Profile.propKey(columnType, (event.target as any).value)
    });
  }
  render() {
    const { contact } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <Card>
          <form
            className="w-full p-3"
            onSubmit={(event: any) => {
              this.props.onSubmit(event);
            }}
          >
            <CardHeader>
              <div>Profile</div>
              <div>
                <Button text="Save" />
              </div>
            </CardHeader>
            <div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    value={contact.firstName}
                    onChange={event => this.handleChange(event, "firstName")}
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-last-name"
                    value={contact.lastName}
                    onChange={event => this.handleChange(event, "lastName")}
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-email"
                    type="email"
                    value={contact.email}
                    onChange={event => this.handleChange(event, "email")}
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-campus"
                  >
                    Main Campus
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-campus"
                    >
                      <option>Scottdale</option>
                      <option>Mesa</option>
                      <option>Downtown</option>
                      <option>Espanol</option>
                      <option>Glendale</option>
                    </select>
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Card>

        <Card>
          <form
            className="w-full p-3"
            onSubmit={(event: any) => {
              this.props.onSubmit(event);
            }}
          >
            <CardHeader>
              <div>Notifications</div>
              <div>
                <Button text="Save" />
              </div>
            </CardHeader>
            <div>
              <Notifications />
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default Profile;
