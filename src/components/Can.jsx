import rules from '../utils/rbac-rules';

export function check(rules, role, action, data){
    const permissions = rules[role];
    if(!permissions){
        //role is not present in the rules 
        return false;
    }

    //check their static permissions
    const staticPermissions = permissions.static;

    if(staticPermissions && staticPermissions.includes(action)){
        //this person's role has permission for this action
        return true;
    }

    //check their dynamic permissions
    const dynamicPermissions = permissions.dynamic;
    if(dynamicPermissions){
        const permissionCondition = dynamicPermissions[action];
        if(!permissionCondition){
            //dynamic rule not provided for this action
            return false;
        }

        return permissionCondition(data);
    }

    return false;
}

const Can = props => {
    return check(rules, props.role, props.perform, props.data) ? props.yes() : props.no();
}

Can.defaultProps = {
    yes: () => null,
    no: () => null
}

export default Can;